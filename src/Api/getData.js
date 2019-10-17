import gapi from "gapi-client";

function execute(keyword) {
    return gapi.client.youtube.search.list({
        part: "snippet",
        type: keyword
    })
        .then((response) => {
            console.log("Response", response);
        },
        (err) => { console.error("Execute error", err); });
}

export default function loadClient(keyword) {
    gapi.client.setApiKey("AIzaSyBB3LIF_f6Z6IIJuU46SecNkzsWYYlIGrc");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(() => { console.log("GAPI client loaded for API"); },
            (err) => { console.error("Error loading GAPI client for API", err); })
        .then(() => { execute(keyword); },
            (err) => { console.error("Execute error", err); });
}

gapi.load("client", () => {
    gapi.client.init({ apiKey: "AIzaSyBB3LIF_f6Z6IIJuU46SecNkzsWYYlIGrc" });
});
