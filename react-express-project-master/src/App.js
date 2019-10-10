/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    // State holds values returned from server
    this.state = {
      about: null,
      message: null,
      number: null,
      dice: null,

      weatherData: null,
      inputLat: null,
      inputLong: null,
    }
  }

  componentDidMount() {
    // Use Fetch to call API. The /test route returns a simple string
    // This call in componentDidMount will only be called once
    fetch('/about').then((res) => {
      // stream the response as JSON
      return res.json()
    }).then((json) => {
      console.log(json)
      const { about } = json // Get a value from JSON object
      this.setState({ about }) // Set a value on state with returned value
    }).catch((err) => {
      // Handle errors
      console.log(err.message)
    })

    // Let's call another API
    this.fetchMessage()
  }

  fetchMessage(param) {
    // Wrapping the API call in a function allow you to make calls to this
    // API as often as needed.

    // This calls a route and passes value in the query string. 
    console.log("param", param)
    fetch(`/random/${param}`).then(res => res.json()).then((json) => {
      console.log(">", json)
      this.setState({
        message: json.value,
      })
    }).catch((err) => {
      console.log(err.message)
    })
  }
  
  async fetchWeather(latitude, longitude) {
    const url = `/weather/${latitude}/${longitude}`;
    console.log("url", url)
    const res = await axios.get(url, {headers: {'Content-Type': 'application/json'}})
    console.log("res", res)
    this.setState({ weatherData: res.data })
    // }).catch((err) => {
    //   console.log(err.message)
    // })
  }

  renderMessage() {
    // Used to conditionally render data from server.
    // Returns null if message is null otherwise returns
    // a populated JSX element.
    const { message } = this.state
    if (message === null) {
      return undefined
    }

    return <h1>{message}</h1>
  }

  render() {
    const { about } = this.state
    // console.log("axios", axios.get)
    return (
      <div className="App">
        <p>
          <strong>About:</strong>
          {about}
        </p>
        <div>{this.renderMessage()}</div>
        <p>
          <input
            type="text"
            value={ this.state.number }
            placeholder="Enter a number"
            onChange={(e) => {
              this.setState({ number: e.target.value })
            }}
          />

          <h1>For weather API</h1>
          37.8267,-122.4233<br/>
          <input
            type="text"
            value={ this.state.inputLat }
            placeholder="Enter a Latitude"
            onChange={(e) => {
              this.setState({ inputLat: e.target.value })
            }}
          />
          <input
            type="text"
            value={ this.state.inputLong }
            placeholder="Enter a Longitude"
            onChange={(e) => {
              this.setState({ inputLong: e.target.value })
            }}
          />
        </p>

        <p>
          <button
            type="button"
            onClick={() => {
              this.fetchMessage(this.state.number)
              this.fetchWeather(this.state.inputLat, this.state.inputLong)
            }}
          >
          Submit
          </button>
        </p>

        <pre style={{height:'50vh', overflow:'auto'}}>
            <code>{JSON.stringify(this.state.weatherData, null, ' ')}</code>
        </pre>
      </div>
    );
  }
}

export default App;
