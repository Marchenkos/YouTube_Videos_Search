import gapi from "gapi-client";

function execute(keyword, nextPage, callback) {
    return gapi.client.youtube.search.list({
        part: "snippet",
        type: "video",
        q: keyword,
        pageToken: nextPage
    })
        .then((response) => {
            const result = {
                videoList: response.result.items,
                totalResult: response.result.pageInfo.totalResults,
                nextPage: response.result.nextPageToken
            };
            callback(result);
        })
        .catch((err) => {
            console.error("Execute error", err);
        });
}

export default function loadClient(keyword, nextPage, changeStateCallback) {
    gapi.client.setApiKey("AIzaSyBB3LIF_f6Z6IIJuU46SecNkzsWYYlIGrc");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(() => { console.log("GAPI client loaded for API"); })
        .then(() => { execute(keyword, nextPage, changeStateCallback); })
        .catch((err) => {
            console.error("Execute error", err);
        });
}

gapi.load("client", () => {
    gapi.client.init({ apiKey: "AIzaSyBB3LIF_f6Z6IIJuU46SecNkzsWYYlIGrc" });
});
