import React, {Component} from 'react';
import ToDoList from './ToDoList';
import Form from './Form';

export default class App extends Component {
  state = {
    tasks: [],
 }

  removeTask = index => {
    const { tasks } = this.state
    this.setState({
      tasks: tasks.filter((task, i) => {
        return i !== index
      })
    })
  }

  handleSubmit = task => {
    this.setState({tasks: [...this.state.tasks, {item: task.item, complete: false}]})
  }

  updateTask = (oldTask, newTask) => {
    let tasks = this.state.tasks.filter((task) => {
      return task.item !== oldTask
    });
    this.setState({tasks: [...tasks, {item: newTask.item, complete: false}]})
    // workaround to close modal after submit
    document.getElementById('modal-close-button').click()
  }

 toggleComplete = task => {
   task.complete = !task.complete
   this.setState(this.state.tasks)
  }

  render() {
     return (
       <div className="container">
         <h3>To-Do List</h3>
         <Form handleSubmit={this.handleSubmit} />
         <ToDoList tasks={this.state.tasks} removeTask={this.removeTask} toggleComplete={this.toggleComplete}
          updateTask={this.updateTask} />
       </div>
     )
   }
 }
