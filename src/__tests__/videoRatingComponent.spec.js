import { shallow } from "enzyme";
import React from "react";
import VideoRating from "../components/VideoRating";

const { describe, it, expect } = global;

describe("Component with information about video rating", () => {
    it("Render component with error message", () => {
        const props = {
            value: {
                viewCount: 100,
                commentCount: 30,
                likeCount: 25
            }
        };
        const wrapper = shallow(<VideoRating {...props} />);
        expect(wrapper.contains(
            <span className="icon-heart item__icon" />
        )).toEqual(true);
    });
});
