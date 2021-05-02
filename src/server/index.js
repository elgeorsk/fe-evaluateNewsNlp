let path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

// Require the Aylien npm package
let aylien = require("aylien_textapi");

// This will allow us to use environment variables we set in a new file
const dotenv = require('dotenv');

dotenv.config();

let aylienapi = new aylien({
   application_id: process.env.AYLIEN_API_ID,
   application_key: process.env.AYLIEN_API_KEY
});
console.log(`Your API key is ${process.env.AYLIEN_API_KEY}`);

const app = express();

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
    console.log('Example app listening on port 8082!')
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});
