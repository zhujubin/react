'use strict'
import React, { Component } from 'react'


class Form extends Component{
  constructor(props){
    super(props)
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({value: e.target.value});
  }

  handleSubmit(e){
    alert('a name was submited  ' +   this.state.value);
    e.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={this.handleChange} value={this.state.value}/>
        </label>
        <input type="submit" value='Submit'/>
      </form>
    )
  }
}
export default Form;