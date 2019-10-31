import { getMetadata } from "./getMetadataActions";
import { addError } from "./addErrorActions";
import loadClient from "../Api/getData";

const minimumResult = 9;

export const ADD_VIDEO = "ADD_VIDEO";
export const ENTER_VIDEO_NAME = "ENTER_VIDEO_NAME";
export const CLEAR_VIDEO_LIST = "CLEAR_VIDEO_LIST";

export const addVideo = item => {
    return {
        type: ADD_VIDEO,
        videoList: item
    };
};

export const enterVideoName = value => {
    return {
        type: ENTER_VIDEO_NAME,
        name: value
    };
};

export const clearVideoList = () => {
    return {
        type: CLEAR_VIDEO_LIST
    };
};

export const getVideoAsync = (videoName, nextPageToken) => {
    return dispatch => {
        return loadClient(videoName, nextPageToken, (video, paramOfPage) => {
            dispatch(addVideo(video));
            dispatch(getMetadata(paramOfPage));
        }, error => {
            dispatch(addError(error));
        });
    };
};

export const initialGetVideo = (videoName, nextPageToken) => {
    return dispatch => {
        return loadClient(videoName, nextPageToken, (video, paramOfPage) => {
            if (minimumResult > paramOfPage.totalResult) return;

            dispatch(addVideo(video));
            loadClient(videoName, paramOfPage.nextPageToken, (additionalVideo, parametersOfPage) => {
                dispatch(addVideo(additionalVideo));
                dispatch(getMetadata(parametersOfPage));
            });
        }, error => {
            dispatch(addError(error));
        });
    };
};
