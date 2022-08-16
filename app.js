const express = require('express');
const sendDetails = require('./controllers/mailApiCall.js');
const path = require('path');

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


app.get('/mail-api-call', function(req, res) {
    console.log('receiving data ...');
    const firstName=req.query.firstName;
    const lastName=req.query.lastName;
    const email=req.query.email;
    const eventDate="08/27/2022";
    const registeredDate= "08/27/2022";

    const response = sendDetails(firstName,lastName,email,eventDate,registeredDate);
    res.send('Thanks for Subscribing');
});

app.use('/css/main.css', express.static(__dirname + '/public/css/main.css'));
app.use('/images', express.static(__dirname + '/public/images/bg-head-02.jpg'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'/public/index.html'));
});

// start the server
app.listen(process.env.PORT || 5000,()=>{
    console.log('server started')
});

