export const ON_SUBMIT_VIDEO = "ON_SUBMIT_VIDEO";

export const onSubmitVideo = (value) => {
    return {
        type: ON_SUBMIT_VIDEO,
        name: value
    };
};
