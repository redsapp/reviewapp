const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')

const HomeRoutes = require('./routes/HomeRoute');

const { add } = require('lodash');
const { render } = require('ejs');
//Express app
const app = express();

// db url
const dbURI = ''

// mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology:true})
// .then((result)=> app.listen(3000))
// .catch((err) => console.log(err));
// Register view engine
app.listen(3000);
app.set('view engine', 'ejs');

//Midleware static files
app.use(express.static('public'));
// Midleware post request
app.use(express.urlencoded({extended:true}))
// first route
app.use(morgan('dev'));

app.get('/',(req,res)=>{
//res.send('<h1>Hello world</h1>')

    res.render('HomePage',{title:'Home'});




});


app.use('/home', HomeRoutes);

app.use((req,res) => {
    res.status(404).render('404',{title:'404'})

});
