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
      subImage: require("./sugarkevin.jpg"),
      styImage: require("./Hd-Wallpaper-Trippy.jpg"),
      formFilled: false,
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
        <div class="infographic">
          {/* Put in own container temporarily until non image infographic
          TODO replace image infographic with html */}
          <img src={require("./infographic.jpg")}/>
        </div>
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
                // should add to this.state.fileList
                console.log("first one")
                this.setState({files: this.state.files.concat(e.target.files[0].name)})
                console.log("this.state.files", this.state.files)
                this.setState({fileObjects: this.state.fileObjects.concat(e.target.files)})
                console.log("this.state.fileObjects", this.state.fileObjects)
                this.setState({subImage: URL.createObjectURL(e.target.files[0])})
              }}
                
            />
            <label for="file-1"><strong>Choose Subject image</strong><span class="box__dragndrop"> or drop it here</span>.</label>

              {this.state.files.map((file) =>
                <div>{file}</div>
                // <div key={i}>{file}</div>
              )}

            </div>
          </ImageUpload>
          <img style={{width: '600px'}} src={this.state.subImage} />
        </div>
        
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
                console.log("hello")
                this.setState({files: this.state.files.concat(e.target.files[0].name)})
                console.log("this.state.files", this.state.files)
                this.setState({fileObjects: this.state.fileObjects.concat(e.target.files)})
                console.log("this.state.fileObjects", this.state.fileObjects)
                // TODO This code does not reach and thus styImage never changes
                this.setState({styImage: URL.createObjectURL(e.target.files[0])})
                console.log("styImage", this.state.styImage)
              }}
                
            />
            <label for="file-2"><strong>Choose Style image</strong><span class="box__dragndrop"> or drop it here</span>.</label>

              {this.state.files.map((file) =>
                <div>{file}</div>
                // <div key={i}>{file}</div>
              )}

              {/* {this.setState({})} */}
            </div>
          </ImageUpload>
          <img style={{width: '600px'}} src={this.state.styImage} />
        </div>
      </div>
      <div class="email-form">
        <form>
          
          Email:<input type="text" onChange= {(e) => this.setState({email: e.target.value})}></input>
        </form>

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
              this.setState({formFilled: true})
              // console.log("this.state.fileObjects", this.state.fileObjects)
              // axios.post('http://localhost:5000/style_transfer/', {subject: this.state.fileObjects[0], style: this.state.fileObjects[1]})
            }}>Upload</button> 

          {this.state.formFilled && <div className="formFilled">Thanks for submitting! The resulting image will be emailed to you. Please be patient as this could take up to an hour. You are free to close this tab now.</div>}

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