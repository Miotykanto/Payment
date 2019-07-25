const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./db');

const users = require('./routes/user')

//connect to db
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('saccessfull database 5000') },
    err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(passport.initialize());
require('./passport')(passport)


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('api/users', users)

app.get('/', function(req, res) {
    res.send('hello Putter');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});