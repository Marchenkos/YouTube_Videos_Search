import { combineReducers } from "redux";
import metadataReducer from "./metadataReducer";
import showSpinnerReduser from "./showSpinnerReduser";
import videoReducer from "./videoReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
    video: videoReducer,
    metadata: metadataReducer,
    error: errorReducer,
    spinner: showSpinnerReduser
});
