export const ENTER_VIDEO_NAME = "ENTER_VIDEO_NAME";

export const enterVideoName = (value) => {
    return {
        type: ENTER_VIDEO_NAME,
        name: value
    };
};
