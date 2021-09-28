import React, { Component } from 'react';

import TaskList from '../../ui-components/TaskList/TaskList.jsx';

/*
  Créer une vue qui gère une todo list.

  Les liste des taches est stockée dans le state
  On peut ajouter une nouvelle taches
  On peut marche une tache comme fait (du coup elle devien barrée)
  On peut supprimer une tache (elle disparait)
  On peut archiver une tache (elle apparait dans les archives)
*/

import './style.scss';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingTask: '',
      tasks: [
        { text: 'Aller faire les courses', done: false },
        { text: 'Apprendre Javascript', done: false },
      ],
      archivedTasks: [],
    };
  }

  handleCreateTask() {
    this.setState({
      editingTask: '',
      tasks: [
        ...this.state.tasks,
        { id: new Date(), text: this.state.editingTask, done: false },
      ],
    });
  }

  handleUpdateTask(task) {
    this.setState({
      tasks: this.state.tasks.map((t) => {
        if (t !== task) return t;
        return { ...t, done: !t.done };
      }),
    });
  }

  handleArchiveTask(task) {
    this.setState({
      tasks: this.state.tasks.filter((t) => t !== task),
      archivedTasks: [...this.state.archivedTasks, task],
    });
  }

  handleRemoveTask(task) {
    this.setState({
      tasks: this.state.tasks.filter((t) => t !== task),
    });
  }

  handleRemoveArchivedTask(task) {
    this.setState({
      archivedTasks: this.state.archivedTasks.filter((t) => t !== task),
    });
  }

  render() {
    return (
      <div id="TodoList">
        <div className="EditingTask">
          <h1>Nouvelle tache</h1>
          <textarea
            value={this.state.editingTask}
            onChange={(e) => this.setState({ editingTask: e.target.value })}
          />
          <input
            type="button"
            value="Ajouter"
            onClick={this.handleCreateTask.bind(this)}
          />
        </div>
        <div className="current-tasks tasks">
          <h1>Taches en cours</h1>
          <TaskList
            ref={(ref) => {
              console.log(ref);
            }}
            tasks={this.state.tasks}
            onClickTask={this.handleUpdateTask.bind(this)}
            onArchiveTask={this.handleArchiveTask.bind(this)}
            onRemoveTask={this.handleRemoveTask.bind(this)}
            canArchive
          />
        </div>
        <div className="archived-tasks tasks">
          <h1>Taches archivées</h1>
          <TaskList
            tasks={this.state.archivedTasks}
            onRemoveTask={this.handleRemoveArchivedTask.bind(this)}
          />
        </div>
      </div>
    );
  }
}
