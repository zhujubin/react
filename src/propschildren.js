import React, {Component} from 'react'

class Father extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Child><a>aaaaaa</a></Child>
    )
  }
}

function Child(props){
  console.error('child',props);
  return <div>child is string</div>
}

export default Father;