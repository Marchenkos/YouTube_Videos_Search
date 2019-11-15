import metadataReducer, { defaultState } from "../../reducers/metadataReducer";
import { GET_METADATA } from "../../actions/getMetadataActions";

const { describe, it, expect } = global;

describe("Reducer for loading informaition about next page and total result", () => {
    it("Get a metadata", () => {
        const nextPageToken = "JJJ111";
        const totalResult = 1000;
        const action = {
            type: GET_METADATA,
            nextPageToken,
            totalResult
        };

        expect(metadataReducer(defaultState, action)).toEqual({
            ...defaultState,
            nextPageToken: action.nextPageToken,
            totalResult: action.totalResult
        });
    });
});
