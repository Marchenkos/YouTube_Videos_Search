import { ENTER_VIDEO_NAME } from "../actions/enterVideoNameActions";

const defaultState = {
    videoName: "",
    listOfVideo: []
};

export default function rootReducer(state = defaultState, action) {
    switch (action.type) {
    case ENTER_VIDEO_NAME:
        return {
            ...state,
            videoName: action.value
        };
    default:
        return state;
    }
}
