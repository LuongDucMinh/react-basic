import React from 'react'
import AddTodoList from './AddTodo'

class ListTodo extends React.Component {
  state = {
    todo: [
      { id: 1, job: 'Learn English' },
      { id: 5, job: 'Learn Math' },
      { id: 19, job: 'Learn Physics' },
    ],
    editTodo: {},
  }

  handleAddTodo = (job) => {
    this.setState({ todo: [...this.state.todo, job] })
  }

  handleDeleteTodo = (job) => {
    let currentTodo = this.state.todo
    currentTodo = currentTodo.filter((item) => item.id !== job)
    this.setState({
      todo: currentTodo,
    })
  }

  handleClickEditTodo = (Todo) => {
    let { editTodo, todo } = this.state
    let emptyObj = Object.keys(editTodo).length === 0

    //save
    if (emptyObj === false && editTodo.id === Todo.id) {
      let todoCopy = [...todo]

      let objIndex = todoCopy.findIndex((obj) => obj.id === Todo.id)

      //Log object to Console.
      console.log('Before update: ', todoCopy[objIndex])

      //Update object's name property.
      todoCopy[objIndex].job = editTodo.job

this.setState({
  todo:todoCopy,
  editTodo:{}
})

      return
    }

    //edit
    this.setState({
      editTodo: Todo,
      
    })
  }

  handleOnchangeEditTodo = (e) => {
    let editTodoCopy = { ...this.state.editTodo }
    editTodoCopy.job = e.target.value
    this.setState({
      editTodo: editTodoCopy,
    })
  }

  render() {
    let { todo, editTodo } = this.state

    let emptyObj = Object.keys(editTodo).length === 0
    return (
      <div>
        <AddTodoList AddTodo={this.handleAddTodo} />

        {todo.map((item) => {
          return (
            <div>
              {emptyObj === true ? (
                <span>{item.job}</span>
              ) : (
                <>
                  {editTodo.id === item.id ? (
                    <span>
                      <input
                        value={editTodo.job}
                        onChange={(e) => {
                          this.handleOnchangeEditTodo(e)
                        }}
                      />
                    </span>
                  ) : (
                    <span>{item.job}</span>
                  )}
                </>
              )}

              <button
                onClick={() => {
                  this.handleClickEditTodo(item)
                }}
              >
                {emptyObj === false && editTodo.id === item.id
                  ? 'Save'
                  : 'Edit'}
              </button>
              <button
                onClick={() => {
                  this.handleDeleteTodo(item.id)
                }}
              >
                Delete
              </button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ListTodo
