export const LOADING_STARTED = " LOADING_STARTED";
export const LOADING_FINISHED = " LOADING_FINISHED";

export const showSpinner = () => {
    return {
        type: LOADING_STARTED,
        isLoading: true
    };
};

export const hideSpinner = () => {
    return {
        type: LOADING_FINISHED,
        isLoading: false
    };
};
