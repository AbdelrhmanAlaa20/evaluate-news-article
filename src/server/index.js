// TODO: Configure the environment variables
const dotenv = require('dotenv')
dotenv.config()

const fetch = require('node-fetch');
var path = require('path')

const port = 8081
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')


// TODO add Configuration to be able to use env variables

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(express.static('dist'))


app.get('/', (req, res)  => {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// a route that handling post request for new URL that coming from the frontend
const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1';
const API_KEY = process.env.API_KEY ;
let userUrl = '';

app.post ('/api', async (req, res) => {
    userUrl = req.body.url;
    const API_URL = `${BASE_API_URL}?key=${API_KEY}&url=${userUrl}&lang=en`;
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache',
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
            //   'Content-Type': 'application/x-www-form-urlencoded',
            }});
        const dataFetched = await response.json();
        res.send(dataFetched);
    }catch(error) {
        console.log(`error, ${error}`);
    }
})

app.get('/test', (req, res) => {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(port, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${port}!`)
})

// TODO: export app to use it in the unit testing
