import { GET_METADATA } from "../actions/getMetadataActions";

const defaultState = {
    totalResult: 5,
    nextPageToken: ""
};

export default function metadataReducer(state = defaultState, action) {
    switch (action.type) {
    case GET_METADATA:
        return {
            ...state,
            nextPageToken: action.nextPageToken,
            totalResult: action.totalResult
        };
    default:
        return state;
    }
}
