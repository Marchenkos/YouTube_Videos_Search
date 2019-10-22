import { addVideo } from "./getVideoElementActions";
import { getMetadata } from "./getMetadataActions";
import loadClient from "../Api/getData";

export default function getVideoAsync(videoName, nextPage, dispatch) {
    loadClient(videoName, nextPage, (video, result) => {
        dispatch(addVideo(video));
        dispatch(getMetadata(result));
    });
}
