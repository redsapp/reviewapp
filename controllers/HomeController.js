const Home = require('../models/Home');
const Category = require('./../models/ItemCategory');


const home_index = (req,res) =>{

    const newCategory = new Category(
        {
            title:"second category",
            description:"My own description",
            image:"https://lo.com/im.jpg"
        }
    );
    newCategory.save()
    .then((result)=>{
      res.send(result);
    })
    .catch((err)=>{
      res.send(err);
    })

    //res.render('HomePage', {title:'Home Page'});
}










module.exports = {
    home_index,
}
