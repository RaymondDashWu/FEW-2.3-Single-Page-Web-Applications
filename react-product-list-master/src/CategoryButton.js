import React, { Component } from 'react';
import inventory, { categories } from './inventory'


class CategoryButton extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
          category: '',
          currentCategory: null,
        }

        this.cat = "TEST"
      }
      render() {
        const cats = categories.map((item, index) => {
          return (
          <button 
            key={`category-${index}`} 
            onClick={(e) => {
              this.setState({ currentCategory: item});
              // this.state.currentCategory = item;
            }}>
            {item}
          </button>);
        })
    
        const products = inventory.filter(({category}) => {
          return category === this.state.currentCategory || this.state.currentCategory === null
        }).map(({ name, id, category, price, description }, index) => {
          return (
          <div key={`product-${id}`}>
            <h1>
              { name }
            </h1>
            <p>{ price }</p>
            <p>{ description }</p>
            <p>{ category }</p>
          </div>)
        })
        return (
          <div className="App">
            <h1>Show products here</h1>
            <p>{this.state.category}</p>
            
            <ul>
              {/* List product categories here */}
              { cats }
            </ul>
    
            <ul>
              {/* Products listed here */}
              { products }
            </ul>
    
          </div>
        );
      }
}

export default CategoryButton;