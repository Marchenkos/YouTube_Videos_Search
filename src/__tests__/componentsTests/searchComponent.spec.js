import React from "react";
import { shallow } from "enzyme";
import Search from "../../components/Search";

const { describe, it, expect } = global;

describe("Componet that allow to search video", () => {
    const initialProps = {
        onClear: () => {},
        handleSubmit: () => {}
    };

    it("Show search line on header and don't show button", () => {
        const wrapper = shallow(<Search {...initialProps} />);
        const container = wrapper.find("div");

        expect(container.children().length).toEqual(2);
        expect(container.find("input").prop("placeholder")).toEqual("Search...");
    });
});
