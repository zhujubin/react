import React, { Component } from 'react';

 //数据列表
 const products = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
]

//总组件
class SearchDemo extends Component {
  constructor(props){
    super(props)
    this.state = {filterText: '', inStockOnly: false};
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleInstockInput = this.handleInstockInput.bind(this);
  }
  handleFilterTextInput(filterText){
    this.setState({
      filterText:filterText
    })
  }
  
  handleInstockInput(inStockOnly){
    this.setState({  
      inStockOnly : inStockOnly
    })
  }
  render(){
    return(
      <div>
        <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onFilterTextInput={this.handleFilterTextInput} onInStockInput={this.handleInstockInput}/>
        <ProductTable  products={products}  inStockOnly={this.state.inStockOnly} filterText={this.state.filterText}/>
      </div>
    )
  }
}

class ProductCategoryRow extends Component {
  render(){
    return(
      <tr>
        <th colSpan='2'>{this.props.category}</th>
      </tr>
    )
  }
}

class ProductRow extends Component {
  render(){
    var name = this.props.product.stocked ? this.props.product.name : <span style={{'color':'red'}}>{this.props.product.name}</span>
    return(
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    )
  }
}
//搜索框模块
class SearchBar extends Component{
  constructor(props){
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
  }

  handleFilterTextInputChange(e){
    this.props.onFilterTextInput(e.target.value);
  }

  handleInStockInputChange(e){
    this.props.onInStockInput(e.target.checked);
  }

  render(){
    return (
      <form action="submit">
        <input 
        type="text" placeholder="...search" 
        value={this.props.filteText}
        onChange={this.handleFilterTextInputChange}
        />
        <p>
          <input 
          type="checkbox"
          checked={this.props.inStockOnly}
          onChange={this.handleInStockInputChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    )
  }
}

//商品列表模块
class ProductTable extends Component{
  render(){
    var row = [];
    var lastCategory = null;
    console.log(this.props.inStockOnly);
    console.error('this',this);
    this.props.products.forEach((item, index) => {
      if((item.name.indexOf(this.props.filteText) === 1) || (!item.stocked && this.props.inStockOnly)){
        return;
      }
      if(products.category !== lastCategory){
        row.push(<ProductCategoryRow category={item.category} key={index}/>)
      }
      row.push(<ProductRow product={item} key={item.name}/>)
      lastCategory = item.category
    });
    return (
     <table>
       <thead>
         <tr>
           <th>Name</th>
           <th>Price</th>
         </tr>
       </thead>
       <tbody>{row}</tbody>
     </table>
    )
  }
}

export default SearchDemo;
