import * as actions from "../../actions/getVideoElementActions";
import { getMetadata, GET_METADATA } from "../../actions/getMetadataActions";
import { addError, ADD_ERROR } from "../../actions/addErrorActions";

const { describe, it, expect } = global;

describe("Test action to get a video and information about it", () => {
    it("Get a video name", () => {
        const videoName = "start";
        const expectedAction = {
            type: actions.ENTER_VIDEO_NAME,
            name: videoName
        };

        expect(actions.enterVideoName(videoName)).toEqual(expectedAction);
    });

    it("Get a video", () => {
        const item = {
            title: " ",
            description: ""
        };
        const expectedAction = {
            type: actions.ADD_VIDEO,
            listOfVideo: item
        };

        expect(actions.addVideo(item)).toEqual(expectedAction);
    });

    it("Clear video list", () => {
        const expectedAction = {
            type: actions.CLEAR_VIDEO_LIST
        };

        expect(actions.clearVideoList()).toEqual(expectedAction);
    });
});

describe("Test action to get a metadata", () => {
    it("Get a metadata", () => {
        const result = {
            nextPageToken: "JJJJ",
            totalResult: 1000
        };
        const expectedAction = {
            type: GET_METADATA,
            nextPageToken: result.nextPageToken,
            totalResult: result.totalResult
        };

        expect(getMetadata(result)).toEqual(expectedAction);
    });
});

describe("Test action to get an error message", () => {
    it("Get error", () => {
        const errorMessage = "Something wrong..";
        const expectedAction = {
            type: ADD_ERROR,
            errorMessage
        };

        expect(addError(errorMessage)).toEqual(expectedAction);
    });
});
