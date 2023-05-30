import React from 'react'

class AddTodoList extends React.Component {
  state = {
    job: '',
  }

  handleChangeJob = (e) => {
    this.setState({
      job: e.target.value,
    })
  }

  handleAddTodo = (e) => {
    e.preventDefault();
    if(!this.state.job ){
        alert("thiếu")
        return}

    this.props.AddTodo({
      id: Math.floor(Math.random() * 101017),
      job: this.state.job,
    });
   

    this.setState({
      job: ''
    })
  }

  render() {
    return (
      <div>

      
      
        <input value={this.state.job}
          onChange={(e) => {
            this.handleChangeJob(e)
          }}
        />
        <button
          onClick={(e) => {
            this.handleAddTodo(e)
          }}
        >
          
          Add
        </button>
      </div>
    )
  }
}

export default AddTodoList
