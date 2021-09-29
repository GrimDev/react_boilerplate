import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ConnectedComponent from '../../superComponent/ConnectedComponent.jsx';

import * as actions from '../../redux/global/actions';

import './style.scss';

class TestApi extends ConnectedComponent {
  static propTypes = {
    fetchApi: PropTypes.func.isRequired,
    isLoadingApi: PropTypes.bool.isRequired,
    fetchApiFailed: PropTypes.string,
    fetchApiSucceed: PropTypes.object,
  }

  static defaultProps = {
    fetchApiFailed: null,
    fetchApiSucceed: null,
  }

  componentDidMount(props) {
    super.componentDidMount(props);
    this.props.fetchApi();
  }

  render() {
    const { isLoadingApi, fetchApiFailed, fetchApiSucceed } = this.props;
    return (
      <div>
        {isLoadingApi && '...loading'}
        {fetchApiFailed && <div className="error">{fetchApiFailed}</div>}
        {fetchApiSucceed && <div>{JSON.stringify(fetchApiSucceed)}</div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.global });
export default connect(mapStateToProps, actions)(TestApi);
