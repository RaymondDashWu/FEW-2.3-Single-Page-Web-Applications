/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import ImageUpload from './ImageUpload';

import './Home.css';

class App extends Component {
  constructor(props) {
    super(props)

    // State holds values returned from server
    this.state = {
      inputSubject: null,
      inputStyle: null,
      files: [
        'nice.pdf',
        'verycool.jpg',
        'amazing.png',
        'goodstuff.mp3',
        'thankyou.doc'
      ]
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

  handleDrop = (files) => {
    let fileList = this.state.files
    for (var i = 0; i < files.length; i++) {
      if (!files[i].name) return
      fileList.push(files[i].name)
    }
    this.setState({files: fileList})
  }

  render() {
    const { about } = this.state
    // console.log("axios", axios.get)
    return (
      <div className="App">
          <h1>For Image Upload Section</h1>
          <ImageUpload handleDrop={this.handleDrop}>
            <div>
            <input class="box__file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
            <label for="file"><strong>Choose a file</strong><span class="box__dragndrop"> or drag it here</span>.</label>
            <button class="box__button" type="submit">Upload</button>

              {this.state.files.map((file) =>
                <div>{file}</div>
                // <div key={i}>{file}</div>
              )}
            </div>
          </ImageUpload>

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
