/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import ImageUpload from './ImageUpload';
// import Demo from './Demo';


import './Home.css';

class App extends Component {
  constructor(props) {
    super(props)

    // State holds values returned from server
    this.state = {
      inputSubject: null,
      inputStyle: null,
      files: [],
      fileObjects: [],
      email: "",
    }
  }

  async uploadImage(data) {
    const url = 'http://localhost:5000/style_transfer/'
    console.log("url", url)
    const res = await axios
        .post(url, data)
        .then(function (response) {
            console.log("response", response);
            console.log("response.statusText", response.statusText);

            this.setState({inputSubject: subjectImage, inputStyle: styleImage})
        })
        .catch(function (error) {
            console.log(error)
        })
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
      <React.Fragment>
      <div className="App">
          <h1>For Image Upload Section</h1>
          <ImageUpload handleDrop={this.handleDrop}>
            <div>
            <input 
              class="box__file" 
              type="file" 
              name="files[]" 
              id="file" 
              data-multiple-caption="{count} files selected" 
              multiple 
              onChange={(e) => {
                // should add to this.state.fileList
                this.setState({files: this.state.files.concat(e.target.files[0].name)})
                console.log("this.state.files", this.state.files)
                this.setState({fileObjects: this.state.fileObjects.concat(e.target.files)})
                console.log("this.state.fileObjects", this.state.fileObjects)

              }}
                
            />
            <label for="file"><strong>Choose a file</strong><span class="box__dragndrop"> or drag it here</span>.</label>
            <button type="button" class="btn btn-success btn-block" onClick={() => {
              const data = new FormData()
              // const data = this.state.fileObjects
              data.append('subject', this.state.fileObjects[0][0])
              data.append('style', this.state.fileObjects[1][0])
              console.log('this.state.email', this.state.email)
              data.append('email', this.state.email)

              console.log("data before uploadImage", data)
              this.uploadImage(data)
              console.log("data", data)
              // console.log("this.state.fileObjects", this.state.fileObjects)
              // axios.post('http://localhost:5000/style_transfer/', {subject: this.state.fileObjects[0], style: this.state.fileObjects[1]})
            }}>Upload</button> 

              {this.state.files.map((file) =>
                <div>{file}</div>
                // <div key={i}>{file}</div>
              )}
            </div>
          </ImageUpload>
      </div>
      <div class="email-form">
        <form>
          
          Email:<input type="text" onChange= {(e) => this.setState({email: e.target.value})}></input>
        </form>
      </div>
      <div class="infographic">
        <img src={require("./infographic.jpg")} alt="test"/>
      </div>
      </React.Fragment>
    );
  }
}

export default App;

// TODO form should POST a filestorage object
// look up how to submit multiple files
// {/* <form encType="multipart-formdata" method="post">
//   <input type="hidden" value="1024" />

// </form> */}