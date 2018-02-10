//Express
let express = require('express');
let app = express();
//This points to the function in modules
const test1 = require('./modules/test');
const calc = require('./modules/calcBtnMod');
//This tells express where the static content is located
app.use(express.static('server/public'));

//Define the localhost port to use
const port = 5050;
//The following is the Ajax portion
//This is what ties server.js to the URL in client.js
app.get('/test', 
    function(request, response){
        //response.send(XXXX)XXXX = the require const variable that points to the ./modules 
        response.send(test1)
    });
app.get('/calcBtnMod',
    function(request, response){
        response.send(calc)
    })

    //Server listen 
    app.listen(port, function(){
        console.log(`Server listening on port: ${port}`);
})