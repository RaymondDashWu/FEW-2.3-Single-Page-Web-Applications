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
    this.state = {
      inputSubject: null,
      inputStyle: null,
      // Used to show a list of files when uploading
      files: [],
      // What actually gets sent to backend
      fileObjects: [],
      email: "",
      subImage: require("./sugarkevin.jpg"),
      styImage: require("./Hd-Wallpaper-Trippy.jpg"),
      formFilled: false,
    }
  }

  async uploadImage(data) {
    /* 
    * Function to interact with backend that will style images and
    * then uploads results to Imgur.
    * Input: 2 image objects (1 for subject, 1 for style)
    */
    // TODO change this once ready to deploy
    const url = 'http://localhost:5000/style_transfer/'
    const res = await axios
      .post(url, data)
      .then(function (response) {
        this.setState({ inputSubject: subjectImage, inputStyle: styleImage })
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
    this.setState({ files: fileList })
  }

  render() {
    const { about } = this.state
    return (
      <React.Fragment>
        <div className="App">
          <div class="infographic">
            {/* Put in own container temporarily until non image infographic
          TODO replace image infographic with html */}
            <img src={require("./infographic.jpg")} />
          </div>

          {/* Subject section. Everything below is used to prepare
          for backend's need in a subject image */}
          <div className="subjectContainer">
            <ImageUpload handleDrop={this.handleDrop}>
              <div>
                <input
                  class="box__file"
                  type="file"
                  name="files[]"
                  id="file-1"
                  data-multiple-caption="{count} files selected"
                  multiple
                  onChange={(e) => {
                    this.setState({ files: this.state.files.concat(e.target.files[0].name) })
                    this.setState({ fileObjects: this.state.fileObjects.concat(e.target.files) })
                    this.setState({ subImage: URL.createObjectURL(e.target.files[0]) })
                  }}
                />
                <label for="file-1"><strong>Choose Subject image</strong><span class="box__dragndrop"> or drop it here</span>.</label>

                {this.state.files.map((file) =>
                  <div>{file}</div>
                )}
              </div>
            </ImageUpload>
            <img style={{ width: '600px' }} src={this.state.subImage} alt="Subject to transfer" />
          </div>

          {/* Style section. Everything below is used to prepare
          for backend's need in a style image */}
          <div className="styleContainer">
            <ImageUpload handleDrop={this.handleDrop}>
              <div>
                <input
                  class="box__file"
                  type="file"
                  name="files[]"
                  id="file-2"
                  data-multiple-caption="{count} files selected"
                  multiple
                  onChange={(e) => {
                    this.setState({ files: this.state.files.concat(e.target.files[0].name) })
                    this.setState({ fileObjects: this.state.fileObjects.concat(e.target.files) })
                    this.setState({ styImage: URL.createObjectURL(e.target.files[0]) })
                  }}
                />
                <label for="file-2"><strong>Choose Style image</strong><span class="box__dragndrop"> or drop it here</span>.</label>

                {this.state.files.map((file) =>
                  <div>{file}</div>
                )}
              </div>
            </ImageUpload>
            <img style={{ width: '600px' }} src={this.state.styImage} alt="Style to transfer" />
          </div>
        </div>

        <div class="email-form">
          <form>
            Email:<input type="text" onChange={(e) => this.setState({ email: e.target.value })}></input>
          </form>

          <button type="button" class="btn btn-success btn-block" onClick={() => {
            const data = new FormData()
            data.append('subject', this.state.fileObjects[0][0])
            data.append('style', this.state.fileObjects[1][0])
            data.append('email', this.state.email)

            this.uploadImage(data)
            this.setState({ formFilled: true })
          }}>Upload</button>

          {/* This message should be hidden until subject, style, and email filled */}
          {this.state.formFilled && <div className="formFilled">Thanks for submitting! The resulting image will be emailed to you. Please be patient as this could take up to an hour. You are free to close this tab now.</div>}
        </div>
      </React.Fragment>
    );
  }
}

export default App;