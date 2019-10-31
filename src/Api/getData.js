import gapi from "gapi-client";

const minimumResult = 9;

function getChannel(video) {
    return gapi.client.youtube.channels.list({
        part: "snippet",
        id: video.channelId
    })
        .then(response => {
            const { thumbnails, localized } = response.result.items[0].snippet;
            const channelInformation = {
                channelIcon: thumbnails.default.url,
                channelName: localized.title
            };

            return { ...video, channelInformation };
        });
}

function getStatistics(video) {
    return gapi.client.youtube.videos.list({
        part: "statistics",
        id: video.id
    })
        .then(response => {
            const { viewCount, likeCount, commentCount } = response.result.items[0].statistics;
            const videoStatistic = {
                viewCount,
                likeCount,
                commentCount
            };

            return { ...video, videoStatistic };
        });
}

function searchVideo(keyword, nextPage = "") {
    return gapi.client.youtube.search.list({
        part: "snippet",
        type: "video",
        q: keyword,
        pageToken: nextPage
    })
        .then(response => {
            const { pageInfo, nextPageToken } = response.result;
            const videoList = response.result.items.map(item => {
                const { description, channelId, title, thumbnails, publishedAt } = item.snippet;

                return {
                    description,
                    channelId,
                    title,
                    id: item.id.videoId,
                    preview: thumbnails.high.url,
                    datePublication: publishedAt
                };
            });
            const paramOfPage = {
                totalResult: pageInfo.totalResults,
                nextPageToken
            };

            return {
                videoList,
                paramOfPage
            };
        });
}

export default function loadClient(keyword, nextPageToken, onSuccess, onError, continueSearch) {
    gapi.client.setApiKey("AIzaSyDCNpJ-YWHg1kHElIHdlmnVm8NXcBk4gl0");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(() => { console.log("GAPI client loaded for API"); })
        .then(() => {
            searchVideo(keyword, nextPageToken)
                .then(({ videoList, paramOfPage }) => {
                    videoList.forEach(item => getStatistics(item)
                        .then(videoWithStatistic => getChannel(videoWithStatistic)
                            .then(videoWithChannel => {
                                onSuccess(videoWithChannel, paramOfPage);
                            })));
                    return paramOfPage;
                })
                .then(response => {
                    if (response.totalResult > minimumResult && continueSearch) {
                        loadClient(keyword, response.nextPageToken, onSuccess, onError, false);
                    }
                });
        })
        .catch(error => {
            onError(error);
            throw new Error(error);
        });
}

gapi.load("client", () => {
    gapi.client.init({ apiKey: "AIzaSyDCNpJ-YWHg1kHElIHdlmnVm8NXcBk4gl0" });
});
