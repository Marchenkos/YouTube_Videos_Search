import React from "react";
import { shallow } from "enzyme";
import Content from "../../components/Content";
import Spinner from "../../components/Spinner";

const { describe, it, expect } = global;

describe("Component containing video components", () => {
    it("Return img, when nothing found", () => {
        const props = {
            listOfVideo: [null],
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
            isLoadingVideoList: true,
            videoName: "name",
            onShowSpinner: () => {}
        };
        const wrapper = shallow(<Content {...props} />);
        const mainContainer = wrapper.find("main");

        expect(mainContainer.children().length).toEqual(2);
        expect(mainContainer.find(Spinner).length).toEqual(1);
    });
});
