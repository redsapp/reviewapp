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
          
              newuser.password = bcrypt.hashSync(password.toString(), 10);
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


const user_login = (req,res) =>{
    const username = req.body.username;
    const password = req.body.password
    User.findOne({username:username})
    .then((user)=>{
        if(user){
            bcrypt.compare(password.toString(), user.password, function(err, results){
                if(err){
                    throw new Error(err)
                 }
                 if (results) {
                    req.session.loggedin = true;
                    return res.status(200).json({ msg: "Login success" })
                } else {
                    return res.status(401).json({ msg: "Invalid credencial" })
                }
               })
        }else{
            res.send("Username doesn't exist")
        }
      })
      .catch((err)=>{
        console.log(err)
    })

}

const user_logout = (req,res)=>{
    req.session.loggedin = false;
    res.redirect('/login');
  
}
module.exports = {
   
    user_create,
    user_login,
    user_logout
 

}
