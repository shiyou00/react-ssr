import React,{Component} from "react";
import { Link } from "react-router-dom";

class Login extends Component{

  render() {
    return (
      <div>
        <h1>登录页</h1>
        <br/>
        <Link to="/">跳转到首页</Link>
      </div>
    )
  }
}

export default Login;
