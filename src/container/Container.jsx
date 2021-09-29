import React, { Component } from 'react';

export default class Provider extends Component {
  render() {
    if (!this.props.user) {
      return (
        <div>Connecte toi</div>
      );
    }
    return this.props.children;
  }
}
