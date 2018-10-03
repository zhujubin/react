import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchDemo from './searchDemo'
 //函数组件
 const Welcom = <h1>helllo name</h1>
class App extends Component {
  render() {
  //列表渲染
    const list = [1,2,3,4,5,6];
    const listItems = list.map((a,index)=>
    <li key={index}>{a}</li>
  )
  //函数组件
  function Welcom(props){
    return <h1>hello {props.name}</h1>
  }

  const element = <Welcom name="nick"/>

  // 组合组件
  function All(){
    return (
        <div>
          <Welcom name="nick1"/>
          <Welcom name="nick1"/>
          <Welcom name="nick1"/>
        </div>
  );
  }
  //提取/拆分组件
  const user = {
    date : new Date(),
    name : 'nick',
    message : "I hope you can enjoy react!"
  }
  //用户名：
  function UserInfo(props){
    return (
      <div>
        <ul>
          <li>{props.name}</li>
        </ul>
      </div>
    );
  }
  function FormatDate(date){
    return date.toString();
  }

  function Comment(props){
    return(
      <div>
        {props.message}
      </div>
    ) 
  }

  //state搜索例子


  //定时器
    function Tick(props){
      return(
        <div>
          <h1>定时器</h1>
           <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
      )
    }
    
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="comment">
             <Comment message={user.message}/>
             <UserInfo name={user.name}/>
          </div>
          <div>
            <Tick/>
          </div>
          <ul>{listItems}</ul>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <All />
          <SearchDemo/>
        </div>
      </div>
    );
  }
 
}

// ljsdlfjasjdl
export default App;
