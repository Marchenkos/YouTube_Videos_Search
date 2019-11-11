import { shallow } from "enzyme";
import React from "react";
import VideoRating from "../components/VideoRating";

const { describe, it, expect } = global;

describe("Component with information about video rating", () => {
    const props = {
        value: {
            likeCount: "25",
            viewCount: "100",
            commentCount: "30",
        }
    };
    it("Render three field for statistic information", () => {
        const wrapper = shallow(<VideoRating {...props} />);

        expect(wrapper.children().length).toEqual(3);
    });

    it("Render three field that have passed data", () => {
        const wrapper = shallow(<VideoRating {...props} />);
        const elementsWithCount = wrapper.find("div").find("div");

        elementsWithCount.find("p").forEach(element => {
            if (element.prop("className") === "item__count item__count--likes") {
                expect(element.text()).toBe(props.value.likeCount);
            } else if (element.prop("className") === "item__count item__count--comments") {
                expect(element.text()).toBe(props.value.commentCount);
            } else {
                expect(element.text()).toBe(props.value.viewCount);
            }
        });
    });
});
