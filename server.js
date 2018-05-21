// server.js
// where your node app starts

// init project
const express = require('express')
const multer  = require('multer')
const upload = multer()

const nunjucks = require('nunjucks')

const app = express()
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// const mlab_uri = process.env.MONGOLAB_URI

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('connected!')
// });
            

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

// // http://expressjs.com/en/starter/basic-routing.html
// app.get("/", function (req, res) {
//   res.sendFile(__dirname + '/views/index.html');
// });



app.get("/", function (req, res, next) {
  res.render(__dirname + '/views/upload.html', {filesize: "no file"});
});

app.post("/upload", upload.single('myFile'), function (req, res, next) {
  // console.log(req.file) 
  res.render(__dirname + '/views/upload.html', {filesize: req.file.size});
  // res.json({fileSize: req.file.size})
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
