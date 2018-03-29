import React, { Component } from 'react';
import api from '../../services/user';

class App extends Component {
  userName = "";
  constructor() {
    super();
    this.state = {
      userList: []
    };
  }

  // 获取用户列表
  getUserList = async () => {
    let result;
    result = await api.queryUser();
    this.setState({ userList: result });
  }

  componentWillMount() {
    this.getUserList();
  }

  handleChange = async (event) => {
    console.log(event.target.value);
    let result;
    result = await api.queryUserByName(event.target.value);
    this.setState({ userList: result });
  }

  render() {
    const userList = this.state.userList;
    let listItems = '';
    if (userList.length) {
      listItems = userList.map((user) =>
        <li key={user.ID}>
          <div>姓名：{user.realname}</div>
          <div>密码：{user.password}</div>
        </li>
      );
    } else {
      listItems = '暂无匹配数据';
    }
    return (
      <div>
        <input type="text" placeholder="输入用户名查询" onChange={this.handleChange} />
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default App;
