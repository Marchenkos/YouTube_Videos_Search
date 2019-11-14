import { START_LOADING, FINISH_LOADING } from "../actions/loadingVideoActions";

export const defaultState = {
    isLoadingVideoList: false
};

export default function loadingStateReducer(state = defaultState, action) {
    switch (action.type) {
    case START_LOADING:
        return {
            ...state,
            isLoadingVideoList: action.isLoading
        };
    case FINISH_LOADING:
        return {
            ...state,
            isLoadingVideoList: action.isLoading
        };
    default:
        return state;
    }
}
