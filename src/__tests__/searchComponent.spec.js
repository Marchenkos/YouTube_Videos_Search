import React from "react";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import Search from "../components/Search";

const { describe, it, expect } = global;

describe("Componet that allow to search video", () => {
    const initialProps = {
        onClear: () => {},
        handleSubmit: () => {}
    };

    let wrapper;
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((init) => [init, setState]);

    beforeEach(() => {
        wrapper = mount(<Search {...initialProps} />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
    describe("Show on desctop", () => {
        it("Show search line on header and don't show button", () => {
            act(() => {
                wrapper.find(".search-container__search-button").props().onClick();
            });
            expect(setState).toBeTruthy();
            expect(wrapper.contains(<button />)).toEqual(false);
            // expect(wrapper.contains(<input />)).toEqual(true);
        });
    });
    // it("Show on mobile", () => {

    // });
});
