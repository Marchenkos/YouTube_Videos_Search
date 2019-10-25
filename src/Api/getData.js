import gapi from "gapi-client";

function getChannel(video) {
    return gapi.client.youtube.channels.list({
        part: "snippet",
        id: video.channelId
    })
        .then(response => {
            const { snippet } = response.result.items[0];
            const channelInformation = {
                channelIcon: snippet.thumbnails.default.url,
                channelName: snippet.localized.title
            };
            const videoElement = video;
            videoElement.channelInformation = channelInformation;

            return videoElement;
        });
}

function getStatistics(video) {
    return gapi.client.youtube.videos.list({
        part: "statistics",
        id: video.id
    })
        .then(response => {
            const { statistics } = response.result.items[0];
            const videoStatistic = {
                viewCount: statistics.viewCount,
                likeCount: statistics.likeCount,
                commentCount: statistics.commentCount
            };
            const videoElement = video;
            videoElement.videoStatistic = videoStatistic;

            return videoElement;
        });
}

function searchVideo(keyword) {
    return gapi.client.youtube.search.list({
        part: "snippet",
        type: "video",
        q: keyword
    })
        .then(response => {
            const videoList = response.result.items.map(item => {
                const { snippet } = item;
                return {
                    description: snippet.description,
                    channelId: snippet.channelId,
                    id: item.id.videoId,
                    title: snippet.title,
                    preview: snippet.thumbnails.high.url,
                    datePublication: snippet.publishedAt
                };
            });
            const paramOfPage = {
                totalResult: response.result.pageInfo.totalResults,
                nextPage: response.result.nextPageToken
            };

            return {
                videoList,
                paramOfPage
            };
        });
}

export default function loadClient(keyword, nextPage, onSuccess, onError) {
    gapi.client.setApiKey("AIzaSyDBEXSN7JXj7yqIlwaB1oJOP_WOh9YA5jo");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(() => { console.log("GAPI client loaded for API"); })
        .then(() => {
            return searchVideo(keyword, nextPage)
                .then(({ videoList, paramOfPage }) => {
                    videoList.forEach(item => getStatistics(item)
                        .then(videoWithStatistic => getChannel(videoWithStatistic)
                            .then(videoWithChannel => {
                                onSuccess(videoWithChannel);
                            })));
                    return paramOfPage;
                });
        })
        .catch(error => {
            alert("En error occurred while getting data");
            onError(error);
        });
}

gapi.load("client", () => {
    gapi.client.init({ apiKey: "AIzaSyDBEXSN7JXj7yqIlwaB1oJOP_WOh9YA5jo" });
});
