import React, { Component } from 'react';
import { isTemplateElement } from '@babel/types';
import './ImgurGetAlbum.css';

const axios = require('axios').default;


// PSEUDO BRAINSTORM
// Figure out how to use .env
// Create function for GET album
// Redux or React hooks? USE STATE

// url: https://api.imgur.com/3/account/me/images
// headers: {
    // 'Authorization': 'Bearer {{accessToken}}' 
// }

// Debate how to name the images?
// "name": "output.jpg",
// "link": "https://i.imgur.com/Z2NCani.jpg"

// Figure out how to map those images to get output
// gallery view

// import into App.js


class ImgurGetAlbum extends Component {
    constructor(props) {
        super(props)
        

        this.state = {
            isLoaded: false,
            imageNamesURLs: [
                {
                    name: "",
                    link: "",
                    id: "",
                }
            ],
            error: null,
        }
    }


    async componentWillMount() {
        const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
        try {
            const result = await axios.get("https://api.imgur.com/3/account/me/images",
        { headers: {'Authorization': 'Bearer ' + accessToken}});
            
                // let resultDict = {};
                console.log("result.data", result.data)
                console.log(typeof result.data)
                
                // const resultArr = []

                // for (var key in result.data) {
                //     resultArr[key] = key.data
                // }
                
                const results = result.data.data.map(resp => {
                    const { link, name, id } = resp
                    // resultDict[result.name] = result.link;
                    console.log("id", id)
                    return {name,link, id};
                    
                })

                this.setState({ 
                    imageNamesURLs: results
                })
                console.log("results", results)
        } catch (error) {
            console.error(error)
        }
    }
    
      render() {
        const { imageNamesURLs } = this.state;
        console.log("imageNamesURLs", imageNamesURLs)
        return (
          <div className="image">
              {imageNamesURLs.map(item => (
                <div class="imgur-card">
                    <img src={item.link} />
                    <div class="imgur-card-content">
                        <a href={item.link} target="_blank" rel="noopener noreferrer"><h3>{item.name}</h3></a>
                    </div>
                </div>
              ))}    
          </div>
        );
      }
}

export default ImgurGetAlbum;