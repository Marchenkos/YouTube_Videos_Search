import gapi from "gapi-client";

function getChannel(video, paramOfPage, dispatch) {
    gapi.client.youtube.channels.list({
        part: "snippet",
        id: video.channelId
    })
        .then((response) => {
            console.log(response);
            const channelInformation = {
                channelIcon: response.result.items[0].snippet.thumbnails.default.url,
                channelName: response.result.items[0].snippet.localized.title
            };
            const videoElement = video;
            videoElement.channelInformation = channelInformation;
            dispatch(videoElement, paramOfPage);
        })
        .catch((err) => {
            console.error("getStatistics error", err);
        });
}

function getStatistics(video, paramOfPage, dispatch) {
    gapi.client.youtube.videos.list({
        part: "statistics",
        id: video.id
    })
        .then((response) => {
            const videoStatistic = {
                viewCount: response.result.items[0].statistics.viewCount,
                likeCount: response.result.items[0].statistics.likeCount,
                dislikeCount: response.result.items[0].statistics.dislikeCount,
                commentCount: response.result.items[0].statistics.commentCount
            };
            const videoElement = video;
            videoElement.videoStatistic = videoStatistic;
            getChannel(video, paramOfPage, dispatch);
        })
        .catch((err) => {
            console.error("getStatistics error", err);
        });
}

function execute(keyword, nextPage, dispatch) {
    return gapi.client.youtube.search.list({
        part: "snippet",
        type: "video",
        q: keyword,
        pageToken: nextPage
    })
        .then((response) => {
            const videoList = response.result.items.map((item) => {
                return {
                    video: {
                        description: item.snippet.description,
                        channelId: item.snippet.channelId,
                        id: item.id.videoId,
                        title: item.snippet.title,
                        preview: item.snippet.thumbnails.high.url,
                        datePublication: item.snippet.publishedAt
                    }
                };
            });
            const paramOfPage = {
                totalResult: response.result.pageInfo.totalResults,
                nextPage: response.result.nextPageToken
            };

            videoList.forEach(item => {
                getStatistics(item.video, paramOfPage, dispatch);
            });
        })
        .catch((err) => {
            console.error("Execute error", err);
        });
}

export default function loadClient(keyword, nextPage, callback) {
    gapi.client.setApiKey("AIzaSyBB3LIF_f6Z6IIJuU46SecNkzsWYYlIGrc");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(() => { console.log("GAPI client loaded for API"); })
        .then(() => { execute(keyword, nextPage, callback); })
        .catch((err) => {
            console.error("Execute error", err);
        });
}

gapi.load("client", () => {
    gapi.client.init({ apiKey: "AIzaSyBB3LIF_f6Z6IIJuU46SecNkzsWYYlIGrc" });
});
