import React from 'react';
import PropTypes from 'prop-types';

import './test.scss';

export default class ComposantVue extends React.Component {
  static propTypes = {
    params: PropTypes.string,
  };

  static defaultProps = {
    params: 'params par défaut',
  };

  subFunction() {
    return <h2>{this.props.params}</h2>;
  }

  render() {
    return (
      <div className="test">
        {this.subFunction()}
        <input type="text" />
      </div>
    );
  }
}
