import React, { Component } from 'react';
import api from '../../services/user';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userList:''
    };
  }

  // 获取用户列表
  getUserList = async() =>{
     let result;
     result = await api.queryUser();
     console.log(result);
     this.setState({userList:result});
  }

  componentWillMount(){
     this.getUserList();
  }

  render() {
    

    return (
      <div>
         个人中心
      </div>
    );
  }
}

export default App;
