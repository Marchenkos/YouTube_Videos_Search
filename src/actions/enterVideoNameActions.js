export const ENTER_VIDEO_NAME = "ENTER_VIDEO_NAME";
export const ASYNC_GET_DATA = "ASYNC_GET_DATA";

export const enterVideoName = (value) => {
    return {
        type: ENTER_VIDEO_NAME,
        name: value
    };
};

export const asyncGetData = (result) => {
    return {
        type: ASYNC_GET_DATA,
        videoList: result.videoList,
        nextPage: result.nextPage,
        totalResult: result.totalResult
    };
};
