import { LOADING_STARTED, LOADING_FINISHED } from "../actions/loadingVideoActions";

export const defaultState = {
    isLoadingVideoList: false
};

export default function showSpinnerReducer(state = defaultState, action) {
    switch (action.type) {
    case LOADING_STARTED:
        return {
            ...state,
            isLoadingVideoList: action.isLoading
        };
    case LOADING_FINISHED:
        return {
            ...state,
            isLoadingVideoList: action.isLoading
        };
    default:
        return state;
    }
}
