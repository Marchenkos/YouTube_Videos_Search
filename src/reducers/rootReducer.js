import { combineReducers } from "redux";
import metadataReducer from "./metadataReducer";
import videoReducer from "./videoReducer";

export default combineReducers({
    video: videoReducer,
    metadata: metadataReducer
});
