'use strict'
//状态提升
import React ,{ Component } from 'react'

const scaleName = {
  c:'Celsius',
  f:'Fahrenheit'
};

class Calculator extends Component{
  constructor(props){
    super(props);
    this.state={temperature: '', scale:'c'};
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }
   toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
   toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  handleCelsiusChange(temperature){
    this.setState({scale:'c',temperature})
  }
  
  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }
  
  tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
  render(){
    const temperature = this.state.temperature;
    const scale  = this.state.scale;
    const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature;
    return(
     <div>
       <TemperatureInput temperature={celsius} onTemperatureChange={this.handleCelsiusChange} scale='c'/>
       <TemperatureInput temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} scale='f'/>
       <BoilingVerdict celsius={parseFloat(celsius)}/>
     </div>
    )
  }
}

class  TemperatureInput extends Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.props.onTemperatureChange(e.target.value)
  }
  render(){
    const scale = this.props.scale;
    // const temperature = this.state.temperature; 
    const temperature = this.props.temperature;
    return(
      <fieldset>
        <legend>输入一个{scaleName[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange}/>
      </fieldset>
    )
  }
}

function BoilingVerdict (props){
  if(props.celsius>=100){
    return <p>开了</p>
  }else{
    return <p>没开</p>
  }
}


export default Calculator;
