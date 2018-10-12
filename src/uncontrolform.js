import React, { Component} from 'react'

class Uncontrol extends Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    console.error(this.input)
    alert('A name is submit' + this.input.value);
    e.preventDefault();
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={(input)=>{this.input = input}}/>
        </label>
        <input type="submit" value='Submit'/>
      </form>
    )
  }
}

export default Uncontrol;