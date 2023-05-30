import React from 'react'
import './Demo.css';



class ChildComponent extends React.Component {
  state = {
    showJob: false,
  }

  handleShowView = () => {
    this.setState({
      showJob: !this.state.showJob,
    })
  }

  handleHideView = () => {
    this.setState({
      showJob: !this.state.showJob,
    })
  }


  handleDeleteJob= (job) =>{
 this.props.DeleteJob(job)

  }


  render() {
    let { arrayJobs } = this.props
    let { showJob } = this.state

    return (
      <div className='show-title'>
        {showJob === false ? (
          <button className='btn-show' onClick={() => this.handleShowView()}>Show</button>
        ) : (
          <>
            <div className="arrJob">
              {arrayJobs.map((item,index) => {
                return (
                  <>
                    <>
                      <div className="jobList">
                        {item.title} - {item.salary}
                        <button  onClick={()=>{this.handleDeleteJob(item.id)}}>delete</button>
                      </div>
                    </>
                  </>
                )
              })}
            </div>

            <button onClick={() => this.handleHideView()}>Hide</button>
          </>
        )}
      </div>
    )
  }
}

export default ChildComponent
