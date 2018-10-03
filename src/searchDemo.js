import React, { Component } from 'react';
class SearchDemo extends Component {
  render(){
    return(
      <SearchBar/>
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
    var name = this.props.item.stocked ? this.props.item.name : <span style={{'color':'red'}}>{this.props.item.name}</span>
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
  render(){
    return (
      <form action="submit">
        <input type="text" placeholder="...search" value={this.props.filteText}/>
        <p>
          <input type="checkbox" checked={this.props.inStockOnly}/>
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
    this.props.products.forEach((item, index) => {
      if((item.name.indexOf(this.props.filteText) === -1) || (!item.stocked && this.props.inStockOnly)){
        return;
      }
      if(products.category !== lastCategory){
        row.push(<ProductCategoryRow category={item.category} key={item.category}/>)
      }
      row.push()
    });
    return (
      <row/>
    )
  }
}

//数据列表
const products = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
]

export default SearchDemo;
