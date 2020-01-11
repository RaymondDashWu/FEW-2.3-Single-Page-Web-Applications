import React, { Component } from 'react';
import { isTemplateElement } from '@babel/types';
import './ImgurGetAlbum.css';

const axios = require('axios').default;

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
        /*
        * Interacts with Imgur's API to pull last 50(?) images
        * from specified Imgur account
        */ 
        const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
        try {
            const result = await axios.get("https://api.imgur.com/3/account/me/images",
                { headers: { 'Authorization': 'Bearer ' + accessToken } });
            const results = result.data.data.map(resp => {
                const { link, name, id } = resp
                return { name, link, id };
            })

            this.setState({
                imageNamesURLs: results
            })
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        const { imageNamesURLs } = this.state;
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