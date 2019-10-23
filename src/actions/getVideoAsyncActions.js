import { getMetadata } from "./getMetadataActions";
import { addVideo } from "./getVideoElementActions";
import { addError } from "./addErrorActions";
import loadClient from "../Api/getData";

export const getVideoAsync = (videoName, nextPage) => {
    return dispatch => {
        return loadClient(videoName, nextPage, video => {
            dispatch(addVideo(video));
        }, error => {
            dispatch(addError(error));
        })
            .then(paramOfPage => {
                dispatch(getMetadata(paramOfPage));
            });
    };
};
