/* eslint-disable semi */
const axios = require('axios');
const express = require('express')
const bodyParser = require('body-parser')

require('dotenv').config()

const { random, randomD, randomRolls, getWeather } = require('./utils')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// ** Proxy from React can't get at '/' for some reason?
// Apparently this is expected behavior... **
// Test this route with: localhost:4000/
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

// A simple route that returns a JSON object
// Test this route with:
app.get('/about', (req, res) => {
  // This Object is converted to JSON and returned.
  res.json({ about: 'This service generates a random number.' })
})

// Random number route
// Test this route with: http://localhost:4000/random/99
// Where n=99 sets the range of the random number returned
app.get('/random/:n', (req, res) => {
  const { n } = req.params
  const value = random(n)
  // res.json({ value })
  res.json({ value })
})


// /random/die/6
app.get('/random/die/:n', (req, res) => {
  const { n } = req.params
  const value = randomD(n)
  res.json({ value })
})

// /random/dice/3/6
app.get('/random/dice/:n/:s', (req, res) => {
  const { n, s } = req.params
  const randRoll = randomRolls(n, s)
  const rolls = randRoll[0]
  const total = randRoll[1]
  res.json({ rolls, total }) // { "rolls": [1,2,3], "total": 6 }
})

// TODO Make route specifically for darksky api
app.get('/weather/:latitude/:longitude', async (req, res) => {
  const { latitude, longitude } = req.params
  const apikey = process.env.REACT_APP_DARKSKY_API_KEY;

  const url = `https://api.darksky.net/forecast/${apikey}/${latitude},${longitude}`;
  console.log("url", url)
  const resp = await axios.get(url)
  console.log("resp", resp)
  res.json(resp.data)
})

const port = 4000
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`))
