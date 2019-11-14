import React from "react";
import { shallow } from "enzyme";
import Content from "../../components/Content";
import Spinner from "../../components/Spinner";

const { describe, it, expect } = global;

describe("Component containing video components", () => {
    it("Return img, when nothing found", () => {
        const props = {
            listOfVideo: [],
            videoName: "name",
            isLoadingVideoList: false
        };

        const wrapper = shallow(<Content {...props} />);
        const list = wrapper.find("ul");

        expect(list.find("img").prop("alt")).toEqual("nothing-found");
        expect(list.children().length).toEqual(1);
    });

    it("Return spinner, when the video list is loading", () => {
        const props = {
            listOfVideo: [],
            isLoadingVideoList: true
        };

        const wrapper = shallow(<Content {...props} />);

        expect(wrapper.find(Spinner).length).toEqual(1);
    });

    it("Don't show spinner, when the video list was loaded", () => {
        const props = {
            listOfVideo: [],
            isLoadingVideoList: false
        };

        const wrapper = shallow(<Content {...props} />);

        expect(wrapper.find(Spinner).length).toEqual(0);
    });
});
