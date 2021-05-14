let path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist_prod'));

console.log(__dirname);

app.get('/', function (req, res) {
    //res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'));
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

// This will allow us to use environment variables we set in a new file
const dotenv = require('dotenv');
dotenv.config();

// fetch data from  meaning cloud API
let FormData = require('form-data');
const fetch = require('node-fetch');

const apiURL = 'https://api.meaningcloud.com/sentiment-2.1';
// Update request and response variable and add async
app.post('/api', async function (req, res) {
    const formdata = new FormData();
    formdata.append('key', process.env.MEANING_CLOUD_KEY);
    formdata.append('txt', req.query.input);
    formdata.append('lang', "en");  // 2-letter code, like en es fr ...

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    const apiResponse = await fetch(apiURL, requestOptions)
        .then(apiResponse => apiResponse.json())
        .then(data => {
            res.send(data)})
        .catch(error => console.log('error', error));
})
