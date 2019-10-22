import { ADD_VIDEO, ENTER_VIDEO_NAME } from "../actions/getVideoElementActions";

const defaultState = {
    videoName: "",
    listOfVideo: []
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
            listOfVideo: [...state.listOfVideo, action.video]
        };
    default:
        return state;
    }
}
