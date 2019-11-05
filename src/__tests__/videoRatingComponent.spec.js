import { shallow } from "enzyme";
import React from "react";
import VideoRating from "../components/VideoRating";

const { describe, it, expect } = global;

describe("Component with information about video rating", () => {
    it("Render three field for statistic information", () => {
        const props = {
            value: {
                viewCount: 100,
                commentCount: 30,
                likeCount: 25
            }
        };
        const wrapper = shallow(<VideoRating {...props} />);
        expect(wrapper.children().length).toEqual(3);
    });
});
