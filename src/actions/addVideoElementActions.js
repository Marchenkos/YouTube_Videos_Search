export const ADD_VIDEO = "ADD_VIDEO";

export const addVideo = (item, result) => {
    return {
        type: ADD_VIDEO,
        video: item,
        nextPage: result.nextPage,
        totalResult: result.totalResult
    };
};
