import gapi from "gapi-client";

function getChannel(video) {
    return gapi.client.youtube.channels.list({
        part: "snippet",
        id: video.channelId
    })
        .then(response => {
            const channelInformation = {
                channelIcon: response.result.items[0].snippet.thumbnails.default.url,
                channelName: response.result.items[0].snippet.localized.title
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
            const videoStatistic = {
                viewCount: response.result.items[0].statistics.viewCount,
                likeCount: response.result.items[0].statistics.likeCount,
                dislikeCount: response.result.items[0].statistics.dislikeCount,
                commentCount: response.result.items[0].statistics.commentCount
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
                return {
                    description: item.snippet.description,
                    channelId: item.snippet.channelId,
                    id: item.id.videoId,
                    title: item.snippet.title,
                    preview: item.snippet.thumbnails.high.url,
                    datePublication: item.snippet.publishedAt
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
    gapi.client.setApiKey("AIzaSyAdL-Ay79HwcaxCVmAFDLPPZabwOxF5Pf8");
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
    gapi.client.init({ apiKey: "AIzaSyAdL-Ay79HwcaxCVmAFDLPPZabwOxF5Pf8" });
});
