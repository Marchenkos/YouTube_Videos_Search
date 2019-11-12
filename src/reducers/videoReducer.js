import { ADD_VIDEO, ENTER_VIDEO_NAME, CLEAR_VIDEO_LIST, SHOW_SPINNER } from "../actions/getVideoElementActions";

export const defaultState = {
    videoName: "",
    listOfVideo: [],
    isLoadingVideoList: false
};

export default function videoReducer(state = defaultState, action) {
    switch (action.type) {
    case ENTER_VIDEO_NAME:
        return {
            ...state,
            videoName: action.name
        };
    case ADD_VIDEO:
        return {
            ...state,
            listOfVideo: [...state.listOfVideo, ...action.listOfVideo]
        };
    case CLEAR_VIDEO_LIST:
        return {
            ...state,
            listOfVideo: []
        };
    case SHOW_SPINNER:
        return {
            ...state,
            isLoadingVideoList: action.isLoading
        };
    default:
        return state;
    }
}
