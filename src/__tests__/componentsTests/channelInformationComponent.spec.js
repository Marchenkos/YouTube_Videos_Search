import React from "react";
import { shallow } from "enzyme";
import ChannelInformation from "../../components/ChannelInformation";

const { describe, it, expect } = global;

describe("Component with main information about channel", () => {
    const props = {
        value: {
            channelIcon: "path",
            channelName: "channel name"
        },
        date: "00.00.00"
    };

    const wrapper = shallow(<ChannelInformation {...props} />);

    it("Render a channel icon", () => {
        expect(wrapper.find("img").prop("src")).toEqual(props.value.channelIcon);
    });

    it("Render two elements with text from props", () => {
        expect(wrapper.find("div").find("h2").text()).toEqual(props.value.channelName);
        expect(wrapper.find("div").find(".description__date-publication").text()).toEqual(props.date);
    });
});
