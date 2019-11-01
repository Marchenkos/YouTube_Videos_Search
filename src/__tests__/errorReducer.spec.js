import errorReducer, { defaultState } from "../reducers/errorReducer";
import { ADD_ERROR } from "../actions/addErrorActions";

const { describe, it, expect } = global;


describe("Reducer for loading informaition about next page and total result", () => {
    it("Get a metadata", () => {
        const errorMessage = "404 Not Found";
        const action = {
            type: ADD_ERROR,
            errorMessage
        };

        expect(errorReducer(defaultState, action)).toEqual({
            ...defaultState,
            errorMessage: action.errorMessage
        });
    });
});
