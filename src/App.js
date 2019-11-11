import React from "react";
import HeaderContainer from "./containers/HeaderContainer";
import ContentConatiner from "./containers/ContentContainer";
import ErrorBoundary from "./components/ErrorBoundary";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <ErrorBoundary>
                    <HeaderContainer />
                    <ContentConatiner />
                </ErrorBoundary>
            </div>
        );
    }
}
