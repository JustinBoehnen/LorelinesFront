import React, { Component } from "react";

export const DirectoryContext = React.createContext();
export class DirectoryContextProvider extends Component {
  state = {
    entities: [],
  };
  render() {
    return (
      <DirectoryContext.Provider
        value={{
          entities: this.state.entities,
          setEntities: (e) =>
            this.setState({
              entities: e,
            }),
        }}
      >
        {this.props.children}
      </DirectoryContext.Provider>
    );
  }
}
