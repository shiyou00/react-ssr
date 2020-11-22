import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Home = (props)=>{
  return (
    <div>
      <h1>首页</h1>
      <div>{props.name}</div>
      <br/>
      <Link to="/login">跳转到登录页</Link>
      <br/>
      <button onClick={() => console.log("click me")}>点击</button>
    </div>
  )
}

const mapStateToProps = (state)=>({
  name:state.name
})

export default connect(mapStateToProps,null)(Home);
