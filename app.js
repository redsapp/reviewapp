const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')


// routes
const HomeRoutes = require('./routes/HomeRoute');
const ApiCategoryRoutes = require('./routes/ApiCategoryRoutes')




const { add } = require('lodash');
const { render } = require('ejs');
//Express app
const app = express();

// db url
const dbURI = 'mongodb+srv://redones:xJitlcfBuYUn7Edq@cluster0.mxpnl.mongodb.net/Exchange?retryWrites=true&w=majority'
mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology:true})
.then((result)=> app.listen(3000))
.catch((err) => console.log(err));
// Register view engine
// app.listen(3000);
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


app.use('/api/category', ApiCategoryRoutes);

app.use((req,res) => {
    res.status(404).render('404',{title:'404'})

});
