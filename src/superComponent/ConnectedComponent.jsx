import React, { Component } from 'react';

export default class ConnectedComponent extends Component {
  componentDidMount() {
    if (!this.props.connected) {
      console.log('redirect to connection page');
    }
  }
}
