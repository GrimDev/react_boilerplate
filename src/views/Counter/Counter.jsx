import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Counter.scss';

import * as actions from '../../redux/global/actions';

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    addOne: PropTypes.func.isRequired,
    removeOne: PropTypes.func.isRequired,
  }

  componentDidMount() {
    console.log('Mount props', this.props);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate', this.props);
  }

  render() {
    return (
      <div id="Counter">
        <div>
          <h1>{this.props.counter}</h1>
          <input type="button" value="-" onClick={() => this.props.removeOne()} />
          <input type="button" value="+" onClick={() => this.props.addOne()} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.global });

export default connect(mapStateToProps, actions)(Counter);

// ===
// const connectWithMapping = connect(mapStateToProps, actions);
// export default connectWithMapping(LightSwitcher);
