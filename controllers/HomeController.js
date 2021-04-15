const Home = require('../models/Home');

const home_index = (req,res) =>{

    res.render('HomePage', {title:'Home Page'});
}










module.exports = {
    home_index,
}
