const Items = require('../../models/Items');
const Category = require('../../models/ItemCategory');


const items_new = (req,res) => {


  Category.find()
  .then((listOfCategories)=>{
      res.render('items/create',{title:'New item',listOfCategories});
  })
  .catch((err)=>{
      console.log(err)
  })

}

const items_details = (req,res) => {

  const id = req.params.id;
  Items.findById(id)
  .then((itemdetails)=>{
      res.render('items/details',{title:'New item',itemdetails});
  })
  .catch((err)=>{
      console.log(err)
  })

}

module.exports = {
    items_new,
    items_details

}
