//Armando peticion
// Utilizando fetch
// fetch: Ir y traer algo

//fetch("http://localhost:4000/api/users") //Esto es valido
fetch("/api/users")
    .then(function(respuesta){
        //console.log(respuesta)
        return respuesta.json()
    })
    .then(function(data){
         var users = document.getElementById("users")
    
        //console.log(data)
        if (data.length ===0){
            users.innerHTML = users.innerHTML + `<div class="users_title">
                <h2>No hay usuarios registrados</h2>
            </div>`
        } else {
            users.innerHTML = users.innerHTML + `<div class="users_title">
                <h2>${data.length} Usuarios registrados</h2>
            </div>`
        }
        for(var user of data){
            users.innerHTML = users.innerHTML + `<div class="user">
                <div class="user__main">
                    <div class="user__pic">
                        <img src="${user.profile_pic}">
                    </div>
                     <div class="user__info">
                        <input type="hidden" name="idSelected" value=${user.idusuario}>
                        <input class="user__input" disabled value=${user.name}>
                        <input class="user__input" disabled value=${user.gender}>
                        <input class="user__input" disabled value=${user.age}>
                        <input class="user__input" disabled  value=${user.email}>
                        <input class="user__input" disabled value=${user.profession}>
                        <input class="user__input" disabled value=${user.salary}>
                        <button class="btn-edit" id="btn-edit" onclick="changeEdit()">Editar</button>

                    </div>
                </div>
                        
                <div class="user__btn">
                    <button class="btn btn-update" style={visibility=hidden}" onclick="updateUser(${user.idusuario})">Guardar</button>
                    <button class="btn" onclick="deleteUser(${user.idusuario})">Eliminar</button>
                </div>
                        
            </div>`
            }
    })

    // delete user
    async function deleteUser(id){
        console.log("Quiero eliminar usuario "+id);
        fetch("/api/users/"+id,{
            method: "DELETE",
        })
        .then(function(respuesta){
            //console.log(respuesta)
            location.reload();
            return respuesta.json()
        })       
    }

    // update user
    function changeEdit(){
        let inputs = document.getElementsByClassName("user__input");
        for (var input of inputs){
            input.disabled = false;
        }
        /*
        document.getElementsByClassName("user__name")[0].disabled = false;
        document.getElementsByClassName("user__gender")[0].disabled = false;
        document.getElementsByClassName("user__age")[0].disabled = false;
        document.getElementsByClassName("user__email")[0].disabled = false;
        document.getElementsByClassName("user__profession")[0].disabled = false;
        document.getElementsByClassName("user__salary")[0].disabled = false;*/

        document.getElementById('btn-edit').style.visibility='hidden';
    }
   
    async function updateUser(id){
        console.log("Quiero actualizar usuario "+id);
        fetch("/api/users/"+id,{
            method: "POST",
        })
        .then(function(respuesta){
            //console.log(respuesta)
            location.reload();
            return respuesta.json()
        })       
    }
       