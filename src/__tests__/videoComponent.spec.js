import React from "react";
import { shallow } from "enzyme";
import Video from "../components/Video";
import ChannelInformation from "../components/ChannelInformation";
import VideoRating from "../components/VideoRating";

const { describe, it, expect } = global;

describe("Component with main information about video", () => {
    const props = {
        value: {
            preview: "url",
            title: "TITLE",
            description: "Some text",
            datePublication: "00.00.00",
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

    it("Render two additional component", () => {
        const wrapper = shallow(<Video {...props} />);

        expect(wrapper.containsAllMatchingElements([ChannelInformation, VideoRating])).toBeTruthy();
    });

    it("Render two additional component with the passed to them properties", () => {
        const wrapper = shallow(<Video {...props} />);
        const channelInformationComponent = wrapper.find(ChannelInformation);
        const videoRatingComponent = wrapper.find(VideoRating);

        expect(videoRatingComponent.prop("value")).toEqual(props.value.videoStatistic);
        expect(channelInformationComponent.prop("value")).toEqual(props.value.channelInformation);
    });
});
