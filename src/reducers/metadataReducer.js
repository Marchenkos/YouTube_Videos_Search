import { GET_METADATA } from "../actions/getMetadataActions";

const defaultState = {
    totalResult: 0,
    nextPage: ""
};

export default function metadataReducer(state = defaultState, action) {
    switch (action.type) {
    case GET_METADATA:
        return {
            ...state,
            totalResult: action.nextPage,
            nextPage: action.totalResult
        };
    default:
        return state;
    }
}
