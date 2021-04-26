const Items = require('../../models/Items');
const Category = require('../../models/ItemCategory');


const items_list = (req,res) =>{

  Items.find().populate('category').sort({createdAt:-1})
 .then((items)=>{
   res.json(items);
 })
 .catch((err)=>{
     res.json(err);
 })
}

const items_create = (req,res) =>{

  const newitem = new Items(req.body);
     newitem.save()
     .then((result)=>{
         res.redirect('/list')
     })
     .catch((err)=>{
         console.log(err)
     })


}


const items_details = (req,res) =>{
    const id = req.params.id;
    Items.findById(id)
    .then((item)=>{
        
    })
    .catch(err=>{
        console.log(err)
    })

}


const items_delete = (req,res) =>{

    const id = req.params.id;

    Items.findByIdAndDelete(id)
      .then(result => {
        res.send('Success');
      })
      .catch(err => {
        console.log(err);
      });
}






module.exports = {
    items_list,
    items_create,
    items_details,
    items_delete,

}
