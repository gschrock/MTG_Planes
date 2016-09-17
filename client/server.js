var express = require('express');
var app = express();

app.use(express.static(__dirname + "/../client"));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});




//  */
// var express = require('express');
// var app = express();

// // set the port of our application
// // process.env.PORT lets the port be set by Heroku
// var port = process.env.PORT || 8080;

// // set the view engine to ejs
// // app.set('view engine', 'ejs');

// // make express look in the public directory for assets (css/js/img)
// console.log(__dirname + "/..")
// app.use(express.static(__dirname + "/../client/"));

// // set the home page route
// app.get('/', function(req, res) {

//     // ejs render automatically looks in the views folder
//     res.render('index.html');
//     res.render('assets/manaSymbols.png');
// });

// // app.get('/data/planes.json', function(req, res){
// //   res.render(__dirname + '../data/planes.json');
// // });

// // // app.use(express.static(__dirname + "/../data/"));
// // // app.get('*'), function(req, res) {
// // //   res.render('manaSymbols.png')
// // // }

// app.listen(port, function() {
//     console.log('Our app is running on http://localhost:' + port);
// });
// /*



//  */
// // var express = require('express');
// // var bodyParser = require('body-parser');

// // var app = express();

// // app.set('port', (process.env.PORT || 8080));
// // app.use(express.static(__dirname + "/.."));

// // app.use(bodyParser.urlencoded({
// //   extended: true
// // }));
// // app.use(bodyParser.json());

// // app.use(express.static(__dirname + "/.."));

// // app.get('*', function(req, res){
// //     res.render('index.html');
// // });

// // app.listen(app.get('port'), function() {
// // });
