import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";
import * as actions from "../actions/getVideoElementActions";
import { getMetadata, GET_METADATA } from "../actions/getMetadataActions";
import { addError, ADD_ERROR } from "../actions/addErrorActions";

const { describe, it, expect } = global;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


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


describe("Test async action to get a list of video via API youtube", () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it("creates NEWS_GET_SUCCESS when fetching news has been done", () => {
        fetchMock.getOnce("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest", {
            headers: { "content-type": "application/json" }, // описываем заголовки ответа
            body: { finishedValues: [1, 2, 3], paramOfPage: {} }, // описываем сам ответ, опять без необходимости вставлять реальные данные
        });

        const expectedActions = [
            {
                type: actions.ADD_VIDEO,
                payload: [1, 2, 3]
            },
            {
                type: GET_METADATA,
                payload: {},
            },
        ];

        const store = mockStore({});

        return store.dispatch(actions.getVideoAsync("name", "", (video, paramOfPage) => {
            actions.addVideo(video);
            getMetadata(paramOfPage);
        }, error => {
            addError(error);
        })).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
