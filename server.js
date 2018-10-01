require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//express app
const app = express();

//mongoose connect to db
mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true });

//allow access to front-end app
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', process.env.APP_URL);
    next();
});

//define router
const apiRouter = express.Router();
apiRouter.use(bodyParser.json());
app.use('/', apiRouter);

//require resources
require('./app/resources/UserResource')(apiRouter);

app.listen(process.env.SERVER_PORT, function(){
    console.log('listening to port '+process.env.SERVER_PORT);
});