//Express
let express = require('express');
let app = express();

//This points to the function in modules

//Add
const calcTypeAdd = require('./modules/calcTypeAdd');

//Subtract
const calcTypeSubtract = require('./modules/calcTypeSubtract');

//Multily
const calcTypeMultiply = require('./modules/calcTypeMultiply');

//Divide
const calcTypeDivide = require('./modules/calcTypeDivide');
//end 

//This tells express where the static content is located
app.use(express.static('server/public'));

//Define the localhost port to use
const port = 5050;
//The following is the Ajax portion
//This is what ties server.js to the URL in client.js

//Addition Button
app.get('/calcTypeAdd',
    function(request, response){
        //response.send(XXXX)XXXX = the require const variable that points to the ./modules 
        response.send(calcTypeAdd)
    })//end Add Button

//Subtraction Button
app.get('/calcTypeSubtract',
    function(request, response){
        response.send(calcTypeSubtract)
    })//end Subtraction Button

//Multiplication Button
app.get('/calcTypeMultiply',
    function(request, response){
        response.send(calcTypeMultiply)
    })//end Multiplication Button

//Division Button
app.get('/calcTypeDivide',
    function(request, response){
        response.send(calcTypeDivide)
    })//end Division Button

//Server Listen 
app.listen(port, function(){
    console.log(`Server listening on port: ${port}`);
    })//end Server Listen

//     const movieModule = require('../modules/movie-module');
// router.get('/', function(request, response) {
//   let movies = movieModule.getAllMovies();
//   console.log('movies', movies);
//   response.send(movies);
// });

// router.post('/add', function(request, response){
//   let movie = request.body.movie;
//   console.log(movie);
//   movieModule.addMovie(movie);
//   response.sendStatus(200);
// });
