import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header";
import Search from "../../components/Search";
import logoPng from "../../img/icon_youTube.png";

const { describe, it, expect } = global;

describe("Component that consist of header and search component", () => {
    const props = {
        nextPageToken: "nextPage",
        onGetData: () => {},
        onSubmitVideo: () => {},
        onClearVideoList: () => {}
    };
    const wrapper = shallow(<Header {...props} />);

    it("Render logo: image and text", () => {
        expect(wrapper.find("div.logo").find(".logo__caption").text()).toBe("MiniYouTube");
        expect(wrapper.find("div.logo").contains(<img src={logoPng} className="logo__picture" alt="YouTube" />)).toBeTruthy();
    });

    it("Pass prop to child component", () => {
        const SearchComponent = wrapper.find(Search);

        expect(SearchComponent.prop("onClear")).toEqual(props.onClearVideoList);
    });
});
