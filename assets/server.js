/**
 *  Use express in server.js by requiring it.
*/
const express = require ('express');
const app = express();

/**
 *  Add body-parser package to handle reading data from <form> element,
 * 
 *  The urlencoded method tells body-parser to extract data from the <form>.
*/
const bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

/**
 *  Connect to MongoDB via Mongo.client.
*/
const MongoClient = require('mongodb').MongoClient

/**
 *  Create a server in order to connect to browsers,
 * 
 *  Listen to port 3010.
*/
app.listen(3010, function(){

    console.log('listening on 3010')

})

/**
 *  Create cloud database services, 
 * 
 *  link a new MongoDB deployment with dbusername and dbpassword.
*/
MongoClient.connect('mongodb://host:uottawa666@ds263640.mlab.com:63640/the_host', (err, client) => {

    if (err) return console.log(err)
    db = client.db('the_host')

})

/**
 *  Perform and handle a READ operation via a get method,
 * 
 *  Serve a page for our app.
*/
app.get('/', (req,res) => {

    res.sendFile(__dirname + '/html/sign_up.html')
});

app.get('/home', (req,res)=>{

    res.sendFile(__dirname + '/html/home.html')
})


/**
 *  Perform and handle a CREATE operation via a post method,
 * 
 *  Post request can be trggered through <form> element.
 * 
 *  Save data to a collection which is a named location to store stuff.
*/
app.post('/info', (req,res) => {

    db.collection('user_info').save(req.body, (err, result) => {

        if (err) return console.log(err)
        console.log('saved to database')
        res.redirect('/home');
    })
    console.log(req.body)

})