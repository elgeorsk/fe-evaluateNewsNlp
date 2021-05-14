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

// fetch data from aylien api
let json = [];
// Require the Aylien npm package
let AylienNewsApi = require('aylien-news-api');

let defaultClient = AylienNewsApi.ApiClient.instance;

let app_id = defaultClient.authentications['app_id'];
app_id.apiKey = process.env.AYLIEN_API_ID;

let app_key = defaultClient.authentications['app_key'];
app_key.apiKey = process.env.AYLIEN_API_KEY;

let api = new AylienNewsApi.DefaultApi();
function getAylienData(txt){
    let opts = {
        language: ["en"],
        publishedAtStart: "NOW-7DAYS",
        title: txt
    };

    let callback = function(error, data, response) {

        if (error) {
            console.error(error);
        } else {
            //console.log("API called successfully. Returned data: ");
            //console.log("========================================");
            //console.log("--LENGTH-- " + json.length);
            // empty json array
            json.length = 0;
            //console.log("--LENGTH-- " + json.length);
            for (let i = 0; i < data.stories.length; i++) {
                let obj = {
                    title: data.stories[i].title,
                    name: data.stories[i].source.name
                }
                json.push(obj);
            }
        }
    };

    api.listStories(opts, callback);

    return json;
}

app.get('/api', function (req,res){
    getAylienData(req.query.input);
    res.send(json);
});
