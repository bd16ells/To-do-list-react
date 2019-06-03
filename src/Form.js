import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      item: props.task ? props.task.item : ''
    }
    this.state = this.initialState
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value,
    })
  }

  submit = () => {
    if (this.state.item !== "") {
      // meaning it's an edit
      if (this.initialState.item !== "") {
        this.props.updateTask(this.initialState.item, this.state)
      } else {
        this.props.handleSubmit(this.state)
      }
      this.setState(this.initialState)
    }
  }

  render() {
    const {item} = this.state;
    return (
      <div style={{width: '400px'}}>
        <form>
          <input type="text" placeholder="To do" name="item" style = {{width: '235px'}} value={item} onChange={this.handleChange} />
          <input type="button" className="addButton" value="Submit" onClick={this.submit} />
        </form>
      </div>
    )
  }
}
