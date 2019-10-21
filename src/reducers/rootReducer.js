import { ENTER_VIDEO_NAME } from "../actions/enterVideoNameActions";
import { ADD_VIDEO } from "../actions/addVideoElementActions";

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
    case ADD_VIDEO:
        return {
            ...state,
            listOfVideo: [...state.listOfVideo, action.video],
            totalResult: action.nextPage,
            nextPage: action.totalResult
        };
    default:
        return state;
    }
}
