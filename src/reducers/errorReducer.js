import { ADD_ERROR } from "../actions/addErrorActions";

export const defaultState = {
    errorMessage: ""
};

export default function errorReducer(state = defaultState, action) {
    switch (action.type) {
    case ADD_ERROR:
        return {
            ...state,
            errorMessage: action.errorMessage
        };
    default:
        return state;
    }
}
