import React, { Component } from 'react';

export default (WrappedComponent) => {
  class ConnectedComponent extends Component {
    render() {
      if (!this.props.connected) {
        return <WrappedComponent />;
      }
      return 'Connecte toi';
    }
  }

  return ConnectedComponent;
};
