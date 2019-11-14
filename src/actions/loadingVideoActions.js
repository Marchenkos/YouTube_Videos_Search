export const START_LOADING = " START_LOADING";
export const FINISH_LOADING = " FINISH_LOADING";

export const startLoading = () => {
    return {
        type: START_LOADING,
        isLoading: true
    };
};

export const finishLoading = () => {
    return {
        type: FINISH_LOADING,
        isLoading: false
    };
};
