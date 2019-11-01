// import thunk from "redux-thunk";
// import configureMockStore from "redux-mock-store";
// import fetchMock from "fetch-mock";

import * as actions from "../actions/getVideoElementActions";
// import getVideoAsync from "../actions/getVideoElementActions";
const { describe, it, expect } = global;


describe("Test action construtors", () => {
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
            video: item
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

// describe("Async action", () => {
//     afterEach(() => {
//         fetchMock.reset();
//         fetchMock.restore();
//     });

//     it("Make a request to get video", () => {
//         fetchMock.getVideoAsync("name", "JJJ111");
//         const expectedAction = {
//             type: actions.CLEAR_VIDEO_LIST
//         };

//         expect(actions.addVideo()).toEqual(expectedAction);
//     });
// });
