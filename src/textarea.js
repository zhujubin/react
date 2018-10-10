import React ,{Component} from 'react'
class Textarea extends Component{
  constructor(props){
    super(props)
    this.state = {value:'this is textarea label'}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({value: e.target.value})
  }

  handleSubmit(e){
    console.error('you submit is ' + this.state.value);
    e.preventDefault();
  }
  render(){
    return(
    <form onSubmit = {this.handleSubmit}>
      <label>
        Name:
        <textarea onChange={this.handleChange} value={this.state.value}></textarea>
      </label>
      <input type="submit" value='Submit'/>
    </form>
    )
  }
}
export default Textarea