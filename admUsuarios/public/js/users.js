/* PETICIONES */
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
                        <img src="${user.profile_pic}" alt="${user.name}">
                    </div>
                     <div class="user__info">
                        
                        <input type="hidden" name="idSelected" value=${user.idusuario}>
                        <input class="input-${user.idusuario}" name="name-${user.idusuario}" disabled value=${user.name}>
                        <input class="input-${user.idusuario}" name="gender-${user.idusuario}" disabled value=${user.gender}>
                        <input class="input-${user.idusuario}" name="age-${user.idusuario}" disabled value=${user.age}>
                        <input class="input-${user.idusuario}" name="email-${user.idusuario}" disabled  value=${user.email}>
                        <input class="input-${user.idusuario}" name="profession-${user.idusuario}" disabled value=${user.profession}>
                        <input class="input-${user.idusuario}" name="salary-${user.idusuario}" disabled value=${user.salary}>
                        <button class="btn-edit" id="btn-edit-${user.idusuario}" onclick="changeEdit(${user.idusuario})">Editar</button>

                    </div>
                </div>
                        
                <div class="user__btn">
                    <button class="btn btn-update" style={visibility=hidden}" 
                                    onclick="updateUser(${user.idusuario})">
                                        Guardar
                                    </button>
                    <button class="btn" onclick="deleteUser(${user.idusuario})">Eliminar</button>
                </div>
                        
            </div>`
            }
    })

    // delete user
    async function deleteUser(id){
        //console.log("Quiero eliminar usuario "+id);
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
    function changeEdit(id){
        
        let inputs = document.getElementsByClassName("input-"+id);
        for (var input of inputs){
            input.disabled = false;
        }

        document.getElementById('btn-edit-'+id).style.visibility='hidden';
    }
   
    async function updateUser(id){
        //console.log("Quiero actualizar usuario "+id);
        //console.log("name-"+id);
        
        //const name = document.getElementsByName("name-"+id)[0].value;
        //console.log("nuevo nombre" +name);
        fetch("/api/users/"+id,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            }, 
            body: JSON.stringify({
                idusuario: id,
                name: document.getElementsByName("name-"+id)[0].value,
                age: document.getElementsByName("age-"+id)[0].value,
                gender: document.getElementsByName("gender-"+id)[0].value,
                email: document.getElementsByName("email-"+id)[0].value,
                profession: document.getElementsByName("profession-"+id)[0].value,
                salary: document.getElementsByName("salary-"+id)[0].value,
            }),             
        })
        .then(function(respuesta){
            //console.log(respuesta)
            location.reload();
            return respuesta.json()
        })       
    }
       