import gapi from "gapi-client";

export function loadClient() {
    gapi.client.setApiKey("AIzaSyBB3LIF_f6Z6IIJuU46SecNkzsWYYlIGrc");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(() => { console.log("GAPI client loaded for API"); },
            (err) => { console.error("Error loading GAPI client for API", err); });
}

export function execute() {
    return gapi.client.youtube.channels.list({
        part: "contentDetails, id, status",
        id: "UC-OVMPlMA3-YCIeg4z5z23A"
    })
        .then((response) => {
            console.log("Response", response);
        },
        (err) => { console.error("Execute error", err); });
}

gapi.load("client", () => {
    gapi.client.init({ apiKey: "AIzaSyBB3LIF_f6Z6IIJuU46SecNkzsWYYlIGrc" });
});
