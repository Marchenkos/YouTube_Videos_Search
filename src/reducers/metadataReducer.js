import { GET_METADATA } from "../actions/getMetadataActions";

const defaultState = {
    totalResult: 0,
    nextPageToken: ""
};

export default function metadataReducer(state = defaultState, action) {
    switch (action.type) {
    case GET_METADATA:
        return {
            ...state,
            totalResult: action.nextPageToken,
            nextPageToken: action.totalResult
        };
    default:
        return state;
    }
}
