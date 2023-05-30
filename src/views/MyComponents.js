import React from 'react'
import ChildComponent from './ChildComponent'
import AddComponent from './AddComponent'

class MyComponent extends React.Component {
  state = {
    arrayJobs: [
      { id: 1, title: 'student', salary: '400' },
      { id: 2, title: 'teacher', salary: '600' },
      { id: 3, title: 'cooking', salary: '500' },
    ],
  }

  handleAddJob = (job) => {
    
    this.setState({arrayJobs: [...this.state.arrayJobs, job]} )
  }

handleDeleteJob =(job)=>{
   let currentJobs=this.state.arrayJobs;
   currentJobs=currentJobs.filter((item)=>item.id!== job)
  this.setState({
    arrayJobs:currentJobs
  })
}

  render() {
    return (
      <div>
        <AddComponent 
        AddJob={this.handleAddJob}
      
         />
        <ChildComponent arrayJobs={this.state.arrayJobs}
          DeleteJob={this.handleDeleteJob}
         />
      </div>
    )
  }
}

export default MyComponent
