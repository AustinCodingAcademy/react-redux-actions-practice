let express = require("express");

let cityRoutes = require('./routes/cityRoute');

const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cityRoutes);

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/react-redux-actions-practice', {useNewUrlParser: true});

app.listen(3000, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",3000);
});