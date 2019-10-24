export const ADD_ERROR = "ADD_ERROR";

export const addError = errorMessage => {
    return {
        type: ADD_ERROR,
        errorMessage
    };
};
