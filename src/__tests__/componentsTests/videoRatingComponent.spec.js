import { shallow } from "enzyme";
import React from "react";
import VideoRating from "../../components/VideoRating";

const { describe, it, expect } = global;

describe("Component with information about video rating", () => {
    const findChildElements = (parent) => {
        const elementsWithCount = parent.find("div").find("div");
        const likes = elementsWithCount.find(".item__count--likes");
        const comments = elementsWithCount.find(".item__count--comments");
        const views = elementsWithCount.find(".item__count--views");

        return {
            likes,
            comments,
            views
        };
    };

    it("Render three field for statistic information", () => {
        const props = {
            value: {
                likeCount: "25",
                viewCount: "100",
                commentCount: "30",
            }
        };

        const wrapper = shallow(<VideoRating {...props} />);

        expect(wrapper.children().length).toEqual(3);
    });

    it("Render three field that have passed data", () => {
        const props = {
            value: {
                likeCount: "25",
                viewCount: "100",
                commentCount: "30",
            }
        };

        const wrapper = shallow(<VideoRating {...props} />);
        const elementsWithCount = findChildElements(wrapper);

        expect(elementsWithCount.likes.text()).toBe(props.value.likeCount);
        expect(elementsWithCount.comments.text()).toBe(props.value.commentCount);
        expect(elementsWithCount.views.text()).toBe(props.value.viewCount);
    });

    it("Render three elements with passed data, where 1000 = 'K'", () => {
        const props = {
            value: {
                likeCount: "20000",
                viewCount: "1000",
                commentCount: "300000",
            }
        };
        const expectedOutput = {
            likeCount: "20K",
            viewCount: "1K",
            commentCount: "300K",
        };

        const wrapper = shallow(<VideoRating {...props} />);
        const elementsWithCount = findChildElements(wrapper);

        expect(elementsWithCount.likes.text()).toBe(expectedOutput.likeCount);
        expect(elementsWithCount.comments.text()).toBe(expectedOutput.commentCount);
        expect(elementsWithCount.views.text()).toBe(expectedOutput.viewCount);
    });

    it("Render three elements with passed data, where 1 000 000 = 'M'", () => {
        const props = {
            value: {
                likeCount: "2500000",
                viewCount: "10800000",
                commentCount: "3000000",
            }
        };
        const expectedOutput = {
            likeCount: "2.5M",
            viewCount: "10.8M",
            commentCount: "3M",
        };

        const wrapper = shallow(<VideoRating {...props} />);
        const elementsWithCount = findChildElements(wrapper);

        expect(elementsWithCount.likes.text()).toBe(expectedOutput.likeCount);
        expect(elementsWithCount.comments.text()).toBe(expectedOutput.commentCount);
        expect(elementsWithCount.views.text()).toBe(expectedOutput.viewCount);
    });

    it("Render three elements with passed data, if data didn't pass return 0", () => {
        const props = {
            value: {
                likeCount: "20000",
                viewCount: "",
                commentCount: "",
            }
        };
        const expectedOutput = {
            likeCount: "20K",
            viewCount: "0",
            commentCount: "0",
        };

        const wrapper = shallow(<VideoRating {...props} />);
        const elementsWithCount = findChildElements(wrapper);

        expect(elementsWithCount.likes.text()).toBe(expectedOutput.likeCount);
        expect(elementsWithCount.comments.text()).toBe(expectedOutput.commentCount);
        expect(elementsWithCount.views.text()).toBe(expectedOutput.viewCount);
    });
});
