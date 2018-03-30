import React, { Component } from 'react';
import Cookie from '../../utils/cookie';
// import { Button } from '../../components/weui';
import '../../assets/style/don.less';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      userName:''
    };
  }
  
  getLoginInfo =()=>{
    let user = Cookie.get('login');
    this.setState({userName:user.loginName});
  }

  componentWillMount() {
    this.getLoginInfo();
  }
  // 登出
  logout=()=>{
     Cookie.del('login');
     this.getLoginInfo();
     window.location.reload();
    //  window.location.replace('#/login');
  }  
  render() {
    return (
      <div>
        <h1>首页</h1>
        <p>欢迎{this.state.userName}</p>
        <input type="button" value="按钮" className="don-btn_warn"/>
        <ul>
      
            <li> <a href="#/detail">detail</a></li>
            <li> <a href="#/my">我的页面需要登录验证</a></li>
            <li> <a href="#/user">用户列表</a></li>
          </ul>
            {
              this.state.userName ? <button onClick={this.logout}>登出</button>  :  <a href="#/login">login</a>
            }
        
      </div>
    );
  }
}

export default App;
