import React, { Component } from "react";
import Title from "./Title";
import "./Counter.css";

// Define a new Component with a class
// It must extend Component (which we imported above)

// change to function
class Counter extends Component {
  constructor(props) {
    super(props); // You must call super() in the constructor!

    // State is an object with properties
    // In this case there is one property: count
    this.state = {
      count: 0
    };

    this.increment = 0;
    this.buttonText = "";
  }

  // handleChange(e) {
  //   this.props.
  // }

  render() {
    const {total, updateTotal, increment} = this.props;
    return (
      <div className="Counter" >
        {/* This element displays the value of this.state.count */}
        {/* <Title text={this.state.count} /> */}

        {/* This button will change this.state.count each time it is clicked
        by adding one. You must change state by calling this.setState() */}
        <button
          onClick={() => {
            this.setState({ count: this.state.count + this.props.increment });
            updateTotal(total + increment);
          }}
          className="Counter--button"
        >
          {this.props.buttonText} {this.props.increment}
        </button>
      </div>
    );
  }
}

export default Counter;
