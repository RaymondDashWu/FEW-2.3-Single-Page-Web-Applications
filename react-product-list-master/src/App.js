import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';

class App extends Component {
  
  render() {
    inventory.filter((item) => {
      
    })
    const cats = categories.map((item, index) => {
      return (<button key={`category-${index}`}>{item}</button>);
    })

    const products = inventory.map(({ name, id, category, price, description }, index) => {
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

export default App;
