import React from "react";
import { shallow } from "enzyme";
import errorPng from "../img/error.png";
import ErrorBoundary from "../components/ErrorBoundary";

const { describe, it, expect } = global;

const Something = () => null;

describe("ErrorBoundary", () => {
    it("Should display image if wrapped component throws an error", () => {
        const wrapper = shallow(
            <ErrorBoundary>
                <Something />
            </ErrorBoundary>
        );
        const error = new Error();
        wrapper.find(Something).simulateError(error);

        expect(wrapper.contains(<img className="error-block" src={errorPng} alt="error" />)).toBeTruthy();
    });

    it("Should display image if state has property 'hasError': true", () => {
        const wrapper = shallow(
            <ErrorBoundary>
                <Something />
            </ErrorBoundary>
        );
        wrapper.setState({ hasError: true });

        expect(wrapper.state("hasError")).toBeTruthy();
        expect(wrapper.contains(<img className="error-block" src={errorPng} alt="error" />)).toBeTruthy();
    });
});
