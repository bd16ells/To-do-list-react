import React, {Component} from 'react';
import Popup from 'reactjs-popup';
import Form from './Form';

export default class ToDoList extends Component {

  render() {
    const {tasks, removeTask, toggleComplete, updateTask} = this.props;
      return (
          <div style={{marginTop:'10px', padding:'5px', borderStyle:'solid', borderWidth: '1.5px', width:'400px'}}>
            <span>Tasks:</span>
            <List tasks={tasks} removeTask={removeTask} updateTask={updateTask} toggleComplete={toggleComplete}/>
          </div>
      )
    }
}

const List = props => {
  const rows = props.tasks.map((row, index) => {
    return (
      <li key={index}>
        <div className={'task-container'}>
          <label className={(row.complete ? 'task-complete' : '')}>{row.item}
            <input type="checkbox" checked={row.complete} onChange={() => props.toggleComplete(row)}/>
            <span className="checkmark" />
          </label>
        </div>
        <div style={{float: 'right'}}>
          <span className="delete" onClick={() => props.removeTask(index)}>Delete</span>
          <span className="bar">&nbsp;|&nbsp;</span>
          <Popup trigger={<span className="edit">Edit</span>} position="right center"
            modal
            closeOnDocumentClick>
            { close => (
              <div className="custom-modal">
                <div className="header">
                  <h3 style={{marginBottom: '20px', marginLeft: '10px'}}>Edit Task</h3>
                  <a id="modal-close-button" className="close" onClick={close} href="#">
                    &times;
                  </a>
                </div>
                <Form task={row} updateTask={props.updateTask} />
              </div>
            )}
          </Popup>
        </div>
      </li>
    )
  }
)
 return <ul>{rows}</ul>
}
