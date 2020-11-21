import React from "react";
import { Link } from "react-router-dom";

const Home = ()=>{
  return (
    <div>
      <h1>首页</h1>
      <br/>
      <Link to="/login">跳转到登录页</Link>
      <br/>
      <button onClick={() => console.log("click me")}>点击</button>
    </div>
  )
}

export default Home;
