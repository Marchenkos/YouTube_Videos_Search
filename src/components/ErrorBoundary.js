import React from "react";
import PropTypes from "prop-types";
import errorPng from "../img/error.png";
import "../style/error-block.less";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError() {
        return {
            hasError: true,
        };
    }

    render() {
        return this.state.hasError ? <img className="error-block" src={errorPng} alt="error" /> : this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
};
