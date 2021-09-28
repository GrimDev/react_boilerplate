import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as actions from '../../redux/global/actions';

class LightSwitcher extends Component {
  static propTypes = {
    lightState: PropTypes.oneOf(['OFF', 'ON']).isRequired,
    putOn: PropTypes.func.isRequired,
    putOff: PropTypes.func.isRequired,
    switchLight: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  }

  componentDidMount() {
    console.log('Mount props', this.props);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate', this.props);
  }

  render() {
    console.log('----', this.props);
    return (
      <div id="LightSwitcher">
        La lumière est {this.props.lightState === 'OFF' ? 'éteinte' : 'allumée'}

        <input type="button" value="Alumer" onClick={() => this.props.switchLight(true)} />
        <input type="button" value="Eteindre" onClick={() => this.props.switchLight(false)} />

        <input
          type="button"
          value="Aller sur la home"
          onClick={() => {
            console.log(this.props.history);
            this.props.history.push('/');
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.global });

export default connect(mapStateToProps, actions)(LightSwitcher);

// ===
// const connectWithMapping = connect(mapStateToProps, actions);
// export default connectWithMapping(LightSwitcher);
