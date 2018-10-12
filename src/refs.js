import React, {Component} from 'react';

class Refs extends Component{
  //创建refs
  constructor(props){
    super(props);
    this.textInput = React.createRef();
    this.focusInputText = this.focusInputText.bind(this);
  }
  
  focusInputText(){
    this.textInput.current.focus();
  }
  

  render(){
    
    return (
      <div>
        <input 
          type="text"   
          ref={this.textInput}
        />

        <input
          type="button"
          value='Focus the text input'
          onClick = {this.focusInputText}
        />
      </div>
    )
  }
}

class AutoFocusInput extends Component{
  constructor(props){
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount(){
    this.textInput.current.focusInputText();
  }
  render(){
    return(
      <Refs ref= {this.textInput}/>
    )
  }
}

export default AutoFocusInput;