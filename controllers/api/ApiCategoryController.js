const Category = require('../../models/ItemCategory');


const category_list = (req,res) =>{

  Category.find().sort({createdAt:-1})
 .then((categories)=>{
     res.json(categories);
 })
 .catch((err)=>{
     res.json(err);
 })
}


const category_create = (req,res) =>{

  const newcategory = new Category(req.body);
     newcategory.save()
     .then((result)=>{
         res.send('Success')
     })
     .catch((err)=>{
         console.log(err)
     })


}


const category_details = (req,res) =>{
    const id = req.params.id;
    Category.findById(id)
    .then((category)=>{
        res.json(category)
    })
    .catch(err=>{
        console.log(err)
    })

}


const category_delete = (req,res) =>{

    const id = req.params.id;

    Category.findByIdAndDelete(id)
      .then(result => {
        res.send('Success');
      })
      .catch(err => {
        console.log(err);
      });
}






module.exports = {
    category_list,
    category_create,
    category_details,
    category_delete

}
