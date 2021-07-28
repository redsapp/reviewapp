const User = require('../../models/User');
const bcrypt = require('bcrypt');

const user_create = (req,res) =>{
    const username = req.body.username;
    const password = req.body.password
    User.findOne({username:username})
    .then((user)=>{
        if(user){
            res.send('exist')

        }else{
            const newuser = new User(req.body);
            if(password){
          
              newuser.password = bcrypt.hashSync(password, 10);
            }
            newuser.save()
               .then((result)=>{
                   res.send(newuser)
               })
               .catch((err)=>{
                   console.log(err)
               })          

        }
      })
      .catch((err)=>{
        console.log(err)
    })
      
    

  

}




module.exports = {
   
    user_create,
 

}
