const express = require("express")
const path = require("path")
const UserController = require("../controllers/users")

function views(document){
    return path.join(__dirname,"../","views",document)
}
const router = express.Router()
const userController = new UserController()

// Asignando middleware al router
//router.use('/users')

router.get('/registro',function(request,response){
    return response.sendFile(views("registro.html"))
})

router.post('/registro',async function(request,response){
    const persona = request.body
    const user = await userController.create(persona)

    console.log(user)
    // Nos lleva luego a la página principal
    if(user.success){
        return response.redirect("/")
    }else{
        return response.redirect("/registro")
    }

})

router.get("/users",(req,res)=>{
    return res.sendFile(views("users.html"))
})

router.get("/api/users",async (req,res)=>{
    var users = await userController.readAll()
    return res.json(users)
})

//delete user
router.delete("/api/users/:id", async (req, res) => {
    const id= req.params.id;
    var user = await userController.deleteUser(id);
    return res.json(user);

})

//update user
router.post("/api/users/:id", async (req, res) => {
    console.log("hola");
    const id= req.params.id;
    const data = req.body;
    console.log(data);
    // let value = document.getElementsByClassName("user__input")[0];
    // console.log("primer valor:")
    // console.log(value)
    var user = await userController.updateUser(data);
    return res.json(user);

})

module.exports = router