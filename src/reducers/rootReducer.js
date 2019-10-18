import { ON_SUBMIT_VIDEO } from "../actions/onSubmitVideoActions";

const defaultState = {
    videoName: "",
    listOfVideo: []
};

export default function rootReducer(state = defaultState, action) {
    console.log(action.name);
    switch (action.type) {
    case ON_SUBMIT_VIDEO:
        return {
            ...state,
            videoName: action.name
        };
    default:
        return state;
    }
}
