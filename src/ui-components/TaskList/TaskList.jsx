import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';

export default class TaskList extends Component {
  static propTypes = {
    tasks: PropTypes.array,
    canArchive: PropTypes.bool,
    onClickTask: PropTypes.func,
    onArchiveTask: PropTypes.func,
    onRemoveTask: PropTypes.func.isRequired,
  }

  static defaultProps = {
    tasks: [],
    canArchive: false,
  }

  faitUnTruc() {
    console.log('toto');
  }

  renderTask(task, i) {
    return (
      <tr
        key={`task-${i}`}
        className="task"
        onClick={() => this.props.onClickTask(task)}
      >
        <td className={cx('TaskText', { done: task.done })}>{task.text}</td>
        <td className="actions">
          {this.props.canArchive && (
            <div onClick={(e) => {
              e.stopPropagation();
              this.props.onArchiveTask(task);
            }}>
              A
            </div>
          )}
          <div onClick={(e) => {
            e.stopPropagation();
            this.props.onRemoveTask(task);
          }}>X</div>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="TaskList">
        <tbody>
          {this.props.tasks.map(this.renderTask.bind(this))}
        </tbody>
      </table>
    );
  }
}
