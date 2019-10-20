import { ENTER_VIDEO_NAME, ASYNC_GET_DATA } from "../actions/enterVideoNameActions";

const defaultState = {
    videoName: "",
    listOfVideo: [],
    totalResult: 0,
    nextPage: ""
};

export default function rootReducer(state = defaultState, action) {
    switch (action.type) {
    case ENTER_VIDEO_NAME:
        return {
            ...state,
            videoName: action.name
        };
    case ASYNC_GET_DATA:
        return {
            ...state,
            listOfVideo: action.videoList,
            totalResult: action.nextPage,
            nextPage: action.totalResult
        };
    default:
        return state;
    }
}
