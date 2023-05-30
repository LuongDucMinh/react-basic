import React from "react";


class AddComponent extends React.Component {

    state={
        title:'',
        salary:''
    };

    
handleChangeTitleJob=(e)=>{
    this.setState({
        title:e.target.value
    })
    
    }
    
    handleChangeSalary=(e)=>{
        this.setState({
            salary:e.target.value
        })
    }
    
handleAddJob=(e)=>{
    e.preventDefault();
if(!this.state.title ||!this.state.salary ){
    alert("thiếu")
    return
}
    this.props.AddJob({
        id:Math.floor(Math.random() * 10),
        title:this.state.title,
        salary:this.state.salary
    });
    this.setState({
        title:'',
        salary:''  
    })
}

    render(){


        return(
            <>
<form action="/action_page.php">
  <label htmlFor="fname">First name: {this.state.title}</label><br/>
  <input type="text" id="fname" name="fname" value={this.state.title}
  onChange={(e)=>this.handleChangeTitleJob(e)}
   /><br/>
  <label htmlFor="lname">Last name: {this.state.Salary}</label><br/>
  <input type="text" id="lname" name="lname" value={this.state.salary}

  onChange={(e)=>this.handleChangeSalary(e)}

  /><br/><br/>
  <button onClick={(e)=>this.handleAddJob(e)}> Button</button>
</form> 

            </>
        )
    }
}

export default AddComponent