import React, { Component } from 'react';
import Temp from './Temp';
import Desc from './Desc';
import Atmos from './Atmos'

class Weather extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          inputValue: '',     // Used to hold value entered in the input field
          weatherData: null,  // Used to hold data loaded from the weather API
        }
      }
    
      handleSubmit(e) {
        e.preventDefault()
        // ! Get your own API key ! 
        const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
        // Get the zip from the input
        const zip = this.state.inputValue
        // Form an API request URL with the apikey and zip
        const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apikey}`
        // Get data from the API with fetch
        fetch(url).then(res => {
          // Handle the response stream as JSON
          return res.json()
        }).then((json) => {
          console.log(json)
          // If the request was successful assign the data to component state
          this.setState({ weatherData: json })
          // ! This needs better error checking here or at renderWeather() 
          // It's possible to get a valid JSON response that is not weather 
          // data, for example when a bad zip code entered.
        }).catch((err) => {
          // If there is no data 
          this.setState({ weatherData: null }) // Clear the weather data we don't have any to display
          // Print an error to the console. 
          console.log('-- Error fetching --')
          console.log(err.message)
          // You may want to display an error to the screen here. 
        })
      }
    
      renderWeather() {
        // This method returns undefined or a JSX component
        if (this.state.weatherData === null) {
          // If there is no data return undefined
          return undefined
        } else {
          if (this.state.weatherData.cod === "404") {
              // If there is no data return undefined
            return <h1>City or zip code not found.</h1>
          }
          if (this.state.weatherData.cod === "429") {
            // If there is no data return undefined
          return <h1>No more API calls can be made. Please try again later</h1>
          }
          if (this.state.weatherData.cod === "401") {
            // If there is no data return undefined
          return <h1>API key error. Either the key is incorrect or deactivated.</h1>
          }
        }
    
        /* 
        This next step needs another level of error checking. It's 
        possible to get a JSON response for an invalid zip in which 
        case the step below fails. 
        */ 
        // Take the weather data apart to more easily populate the component
        const { main, description, icon } = this.state.weatherData.weather[0]
        const { temp, pressure, humidity, temp_min, temp_max } = this.state.weatherData.main 
        
        return (
          <div>
            <div>Title: {main}</div>
            <div><Desc desc={description}/></div>
            <div>Icon: <img src={`https://openweathermap.org/img/wn/${icon}.png`}/></div>
            <div><Temp temp={temp}/></div>
            <div><Atmos pressure={pressure}/></div>
            <div><Atmos humidity={humidity}/></div>
            <div><Temp temp={temp_min} modifier="Min"/></div>
            <div><Temp temp={temp_max} modifier="Max"/></div>
          </div>
        )
      }
    
      render() {
        return (
          <div className="App">
    
            {/** This input uses the controlled component pattern */}
            <form onSubmit={e => this.handleSubmit(e)}>
    
              {/** 
              This pattern is used for input and other form elements 
              Set the value of the input to a value held in component state
              Set the value held in component state when a change occurs at the input 
              */}
              <input 
                value={this.state.inputValue} 
                onChange={e => this.setState({ inputValue: e.target.value })}
                type="text" 
                pattern="(\d{5}([\-]\d{4})?)"
                placeholder="enter zip"
              />
    
              <button type="submit">Submit</button>
    
            </form>
    
            {/** Conditionally render this component */}
            {this.renderWeather()}
    
          </div>
        );
      }
}

export default Weather;