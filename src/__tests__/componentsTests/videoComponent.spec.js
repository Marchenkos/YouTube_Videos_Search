import React from "react";
import { shallow } from "enzyme";
import Video from "../../components/Video";
import ChannelInformation from "../../components/ChannelInformation";
import VideoRating from "../../components/VideoRating";

const { describe, it, expect } = global;
const resizeWindow = (x) => {
    window.innerWidth = x;
    window.dispatchEvent(new Event("resize"));
};

describe("Component with main information about video", () => {
    const props = {
        value: {
            preview: "url",
            title: "TITLE",
            description: "Some text",
            datePublication: "2019-11-01",
            channelInformation: {
                channelIcon: "channelIcon",
                channelName: "channelName"
            },
            videoStatistic: {
                viewCount: 200,
                commentCount: 20,
                likeCount: 130
            }
        }
    };
    const wrapper = shallow(<Video {...props} />);
    const { preview, title, description, channelInformation, videoStatistic } = props.value;

    it("Render two additional component", () => {
        expect(wrapper.containsAllMatchingElements([ChannelInformation, VideoRating])).toBeTruthy();
    });

    it("Render elements for desktop version", () => {
        const container = wrapper.find("div");

        expect(container.find("h1").text()).toBe(title);
        expect(container.find(".video-description__description").text()).toBe(description);
        expect(container.find(".additional-information").children().length).toBe(2);
        expect(container.find("img").prop("src")).toBe(preview);
    });

    it("Render two additional component with the passed to them properties", () => {
        const channelInformationComponent = wrapper.find(ChannelInformation);
        const videoRatingComponent = wrapper.find(VideoRating);

        expect(videoRatingComponent.prop("value")).toEqual(videoStatistic);
        expect(channelInformationComponent.prop("value")).toEqual(channelInformation);
    });

    it("Pass date in correct format", () => {
        const channelInformationComponent = wrapper.find(ChannelInformation);
        const expectedDate = "1.11.2019";

        expect(channelInformationComponent.prop("date")).toEqual(expectedDate);
    });

    it("Render three elements for mobile version without description, statistic and channel informations", () => {
        resizeWindow(500);

        const wrapper2 = shallow(<Video {...props} />);
        const container = wrapper2.find("div");

        expect(container.find("h1").text()).toBe(title);
        expect(container.find("img").prop("src")).toBe(preview);
        expect(container.find("button").length).toBe(1);
    });

    it("Render elements for mobile version if state has property 'isMobileVersion': true", () => {
        const wrapper2 = shallow(<Video {...props} />);
        const container = wrapper2.find("div");

        wrapper2.setState({ isMobileVersion: true });

        expect(wrapper2.state("isMobileVersion")).toBeTruthy();
        expect(container.find("h1").text()).toBe(title);
        expect(container.find("img").prop("src")).toBe(preview);
        expect(container.find("button").length).toBe(1);
    });

    it("Show description, statistic and channel informations in mobile version, after click", () => {
        resizeWindow(500);

        const container = shallow(<Video {...props} />);
        const button = container.find("div").find("button");

        button.simulate("click");

        expect(container.find(".video-description__description").text()).toBe(description);
        expect(container.find(".additional-information").children().length).toBe(2);
    });
});
