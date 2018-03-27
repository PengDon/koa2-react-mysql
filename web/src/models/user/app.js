import React, { Component } from 'react';
import api from '../../services/user';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userList:[]
    };
  }

  // 获取用户列表
  getUserList = async() =>{
     let result;
     result = await api.queryUser();
     this.setState({userList:result});
  }

  componentWillMount(){
     this.getUserList();
  }

  render() {
    const userList = this.state.userList;
    const listItems = userList.map((user) =>
      <li key={user.ID}>
        <div>姓名：{user.realname}</div>
        <div>密码：{user.password}</div>
      </li>
    );

    return (
      <div>
         <ul>{listItems}</ul>
      </div>
    );
  }
}

export default App;
