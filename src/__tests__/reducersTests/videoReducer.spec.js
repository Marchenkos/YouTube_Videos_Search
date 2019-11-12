import videoReducer, { defaultState } from "../../reducers/videoReducer";
import { ADD_VIDEO, ENTER_VIDEO_NAME, CLEAR_VIDEO_LIST } from "../../actions/getVideoElementActions";

const { describe, it, expect } = global;

describe("Reducer for loading video", () => {
    it("Get a videoname to search", () => {
        const videoName = "Redux&React";
        const action = {
            type: ENTER_VIDEO_NAME,
            name: videoName
        };

        expect(videoReducer(defaultState, action)).toEqual({
            ...defaultState,
            videoName: action.name,
        });
    });

    it("Load a video", () => {
        const initialState = {
            videoName: "start",
            listOfVideo: [1, 2, 3, 4]
        };
        const additionalVideo = [5, 6, 7];
        const expectedVideoList = [1, 2, 3, 4, 5, 6, 7];
        const action = {
            type: ADD_VIDEO,
            listOfVideo: additionalVideo
        };

        expect(videoReducer(initialState, action)).toEqual({
            ...initialState,
            listOfVideo: expectedVideoList
        });
    });

    it("Clear video list before new request", () => {
        const initialState = {
            videoName: "start",
            listOfVideo: [1, 2, 3, 4]
        };
        const expectedVideoList = [];
        const action = {
            type: CLEAR_VIDEO_LIST
        };

        expect(videoReducer(initialState, action)).toEqual({
            ...initialState,
            listOfVideo: expectedVideoList
        });
    });
});
