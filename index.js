const express = require('express');
const app = express();

// writing route handler
app.get('/', (req, res) => {
    res.send({ 'hello': 'there' });
});

const PORT = process.env.PORT || 5000;

// // use error function
// function callback(req,res){
//     // do something
// }

// // a variable that has a function assigned to it
// var callback = function(req,res){
//     // do something
// }

// // arrow function
// const callback = (req,res) => {
//     // do something
// }

app.listen(PORT);