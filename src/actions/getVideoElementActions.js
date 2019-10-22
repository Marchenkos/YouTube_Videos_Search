export const ADD_VIDEO = "ADD_VIDEO";
export const ENTER_VIDEO_NAME = "ENTER_VIDEO_NAME";

export const addVideo = (item) => {
    return {
        type: ADD_VIDEO,
        video: item
    };
};

export const enterVideoName = value => {
    return {
        type: ENTER_VIDEO_NAME,
        name: value
    };
};
