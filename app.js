const express=require('express');
const app = express();
require('dotenv/config')
const api=process.env.API_URL;
const bodyParser=require('body-parser')
const morgan = require('morgan')

//middleware
app.use(bodyParser.json())
app.use(morgan('tiny'))

//mongoose
require('./config/db.config')

//route
const questionnaireRoute=require('./controller/questionnaire.controller')
app.use(`${api}/questionnaire`, questionnaireRoute)




//server
app.listen(3000, ()=>{
    console.log("server is running");
})