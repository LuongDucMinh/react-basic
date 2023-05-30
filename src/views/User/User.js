import React from "react";
import axios from 'axios';

class ListUser extends React.Component{

    state={
        listUser:[]
    }
componentDidMount(){
axios.get('https://reqres.in/api/users?page=2').then(res=>{
    console.log('check res',res.data.data);
    this.setState({
        listUser:res && res.data &&res.data.data ? res.data.data:[]
    })
})

}
    render(){
        let{listUser}= this.state  ;
              return (
            <div className="list-user-container">
                <div className="title">
                    Fetch all list
                </div>
                <div className=" list-user-content">
                    <div className="child">
                        {listUser.map((item,index)=>{
                           return (
                            <div>{index+1 } - {item.first_name} </div>
                           )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}






export default ListUser