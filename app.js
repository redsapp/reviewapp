const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')


// routes
const HomeRoutes = require('./routes/HomeRoute');
const ApiCategoryRoutes = require('./routes/ApiCategoryRoutes')
const ApiItemsRoutes = require('./routes/ApiItemsRoutes')
const ItemsRoutes = require('./routes/ItemsRoutes')
const Category = require('./models/ItemCategory')

const TestRoutes = require('./routes/testRoutes')



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

//Variables

// check this out
app.get('/newitem', (req,res)=>{

  Category.find(function(err, cat){
          res.render('items/create',{title:'Home', listOfCategories:cat});
      });

})

app.get('/',(req,res)=>{
//res.send('<h1>Hello world</h1>')
    res.render('HomePage',{title:'Home'});
});

app.get('/list',(req,res)=>{
//res.send('<h1>Hello world</h1>')
    res.render('items/index',{title:'List'});
});


app.get('/details',(req,res)=>{
//res.send('<h1>Hello world</h1>')

    res.render('items/details',{title:'details'});
});


app.get('/login', (req,res) =>{
  // res.send('<h1>Hello world</h1>')
    res.render('items/login', {title: 'login'});
});


app.use('/api/category', ApiCategoryRoutes);
app.use('/api/items', ApiItemsRoutes);
app.use('/items', ItemsRoutes);


app.use('/test', TestRoutes);




app.use((req,res) => {
    res.status(404).render('404',{title:'404'})

});
