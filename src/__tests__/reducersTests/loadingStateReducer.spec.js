import loadingStateReducer, { defaultState } from "../../reducers/loadingStateReducer";
import { START_LOADING, FINISH_LOADING } from "../../actions/loadingVideoActions";

const { describe, it, expect } = global;

describe("Reducer for state determination: loading or not", () => {
    it("Start loading a video list", () => {
        const action = {
            type: START_LOADING,
            isLoading: true
        };

        expect(loadingStateReducer(defaultState, action)).toEqual({
            ...defaultState,
            isLoadingVideoList: action.isLoading
        });
    });

    it("Finish loading a video list", () => {
        const action = {
            type: FINISH_LOADING,
            isLoading: false
        };

        expect(loadingStateReducer(defaultState, action)).toEqual({
            ...defaultState,
            isLoadingVideoList: action.isLoading
        });
    });
});
