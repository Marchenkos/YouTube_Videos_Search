import React from "react";
import TodoListContainer from "./containers/TodoListContainer";

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
    render() {
        return (
            <TodoListContainer />
        );
    }
}
