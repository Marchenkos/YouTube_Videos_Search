import { combineReducers } from "redux";
import metadataReducer from "./metadataReducer";
import videoReducer from "./videoReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
    video: videoReducer,
    metadata: metadataReducer,
    error: errorReducer
});
