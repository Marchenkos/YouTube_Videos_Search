import React from "react";
import HeaderContainer from "./containers/HeaderContainer";
import ContentConatiner from "./containers/ContentContainer";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <HeaderContainer />
                <ContentConatiner />
            </div>
        );
    }
}
