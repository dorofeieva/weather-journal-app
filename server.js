// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


// Initialize the main project folder
app.use(express.static('website'));

const port = 8000;
// Setup Server
const server = app.listen(port, listening => {
    console.log(`runnung on localhost: ${port}`);
})

/* Express to run server and routes */

//a GET route that returns the projectData object in your server code 
app.get('/', sendData = (req, res) => {
    res.send(projectData);
    res.send('welcome');
    console.log('sendData');
})


const data = [];

// a POST route that adds incoming data to projectData
app.post('/add', addToProjectData = (req, res) => {
    data.push(req.body);
    // res.push(projectData);
    
})

app.post('/data', addData = (req, res) => {
   const temp = req.body.temperature;
   const date = req.body.date;
   const userRes = req.body.userRes;
   projectData.date = temp;
})


//Testing
app.get('/test', (req, res) => {
    console.log("test");
    console.log(data);
})

app.get('/testGet', (req, res) => {
    res.send('welcome');
    // data.push(req.body);
    //?? ProjectData.push(data);
    data.push("May2");
    console.log(data);
})