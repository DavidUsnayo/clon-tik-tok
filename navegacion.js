let box_video = document.querySelectorAll(".box-video")
let amigos_item = document.querySelector(".amigos_item")
let agregar_item = document.querySelector(".agregar_item")
let bandeja_item = document.querySelector(".bandeja_item")
let perfil_item = document.querySelector(".perfil_item")

let home = document.querySelector(".home")
home.addEventListener("click",function(){
    activarHome("block")
    activar("none","none","none","none") 
})

let amigos = document.querySelector(".amigos")
amigos.addEventListener("click",function(){
    activarHome("none")
    activar("block","none","none","none")
})

let agregar = document.querySelector(".agregar")
agregar.addEventListener("click",function(){
    activarHome("none")
    activar("none","block","none","none")
})

let bandeja = document.querySelector(".bandeja")
bandeja.addEventListener("click",function(){
    activarHome("none")
    activar("none","none","block","none")
})

let perfil = document.querySelector(".perfil_u")
perfil.addEventListener("click",function(){
    activarHome("none")
    activar("none","none","none","block")
})


function activar(uno,dos,tres,cuatro){
    amigos_item.style.display=uno
    agregar_item.style.display=dos
    bandeja_item.style.display=tres
    perfil_item.style.display=cuatro
}

function activarHome(dato){
    box_video.forEach(function(v){
        v.style.display=dato
    })
}

const listaAmigos = [
    {
        id:1,
        nombre:"usuario1"
    },
    {
        id:2,
        nombre:"usuario2"
    },
    {
        id:3,
        nombre:"usuario3"
    },
    {
        id:4,
        nombre:"usuario4"
    },
    {
        id:5,
        nombre:"usuario5"
    },
    {
        id:6,
        nombre:"usuario6"
    },
    {
        id:7,
        nombre:"usuario7"
    },
    {
        id:5,
        nombre:"usuario5"
    },
    {
        id:6,
        nombre:"usuario6"
    },
    {
        id:7,
        nombre:"usuario7"
    },
]

listaAmigos.map((lista)=>{
    amigos_item.innerHTML += `
            <div class="amigo">
                <div class="amigo_foto"></div>
                <div class="amigo_datos">
                    <h3>${lista.nombre} </h3>
                    <p>Te sigue</p>
                    <div>
                        <button class="eliminar">Eliminar</button>
                        <button class="seguir">Seguir tambien</button>
                    </div>
                </div>
            </div>
    `
})

let siguiendo = document.querySelectorAll(".amigo_datos div")
let seguir = document.querySelectorAll(".seguir")
seguir.forEach(function(se,i){
    se.addEventListener("click",function(){
        siguiendo[i].innerHTML = ''
        siguiendo[i].innerHTML = '<button style="padding:8px 50px">Seguiendo</button>'
        
    })
})

let eliminar = document.querySelectorAll(".eliminar")
eliminar.forEach(function(el,i){
    el.addEventListener("click",function(){
        console.log(el.parentNode.parentNode.parentNode)
        let friend = el.parentNode.parentNode.parentNode
        friend.style.transform="translate(400px, 0px)"
        setTimeout(()=>{
            friend.remove()
        },1200)
    })
})

close_camara.addEventListener("click",function(){
    activarHome("block")
    activar("none","none","none","none") 
})

let content = document.querySelectorAll(".content p")
content.forEach((con)=>{
    con.addEventListener("click",function(){
        con.style.borderBottom="3px solid rgb(39, 39, 39)"
    })
})