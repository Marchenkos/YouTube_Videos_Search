import { combineReducers } from "redux";
import metadataReducer from "./metadataReducer";
import videoReducer from "./videoReducer";
import errorReducer from "./erorReducer";

export default combineReducers({
    video: videoReducer,
    metadata: metadataReducer,
    error: errorReducer
});
