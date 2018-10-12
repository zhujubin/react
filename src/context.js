import React, { Component } from 'react'
const ThemeContext = React.createContext('light');

function ThemedButton(props){

  return(
    <ThemeContext.Consumer>
      {theme => <Button {...props} theme={theme}/>}
    </ThemeContext.Consumer>
  )
}

//中间组件
function Toolbar(props){
  return(
    <div>
      <ThemedButton/>
    </div>
  )
}
class Context extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <ThemeContext.Provider value="dark">
          <Toolbar/>
        </ThemeContext.Provider>
      </div>
    )
  }
}