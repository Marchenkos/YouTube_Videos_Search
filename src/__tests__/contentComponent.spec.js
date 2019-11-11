import React from "react";
import { shallow } from "enzyme";
import Content from "../components/Content";

const { describe, it, expect } = global;

describe("Component containing video components", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Return img, when nothing found", () => {
        const props = {
            listOfVideo: ["null"],
            videoName: "name"
        };
        const wrapper = shallow(<Content {...props} />);
        const list = wrapper.find("ul");

        expect(list.find("img").prop("alt")).toEqual("nothing-found");
        expect(list.children().length).toEqual(1);
    });

    it("Return spinner, when the list of video is loading", () => {
        const props = {
            listOfVideo: [],
            videoName: "name"
        };
        const wrapper = shallow(<Content {...props} />);
        const mainContainer = wrapper.find("main");

        expect(mainContainer.children().length).toEqual(2);
        expect(mainContainer.find("div").prop("className")).toEqual("spinner");
    });
});
