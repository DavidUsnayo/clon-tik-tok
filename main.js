container = document.querySelector(".container")
let compartir = document.querySelector(".compartir")

videos.forEach(function(v,i){
    //console.log(v.mensajes[0])
    let box_video = document.createElement("div")
    box_video.classList.add("box-video")
    box_video.setAttribute("data-id",v.id)
    box_video.innerHTML = `<div class="autor">
                                <h2>${v.titulo} </h2> 
                                <p>${v.info} </p>
                            </div>
                            <div class="interaction">
                                <div class="perfil"><div> <p>+</p></div> </div>
                                <img src="./assets/like-white.png" class="like animate__animated"> 
                                <p>120</p>
                                <img src="./assets/message.png" class="message"> 
                                <p>${v.mensajes.length} </p>
                                <img src="./assets/favorito-white.png" class="favorito animate__animated">
                                <p>10</p>
                                <img src="./assets/share.png" class="share">
                                <p>7</p>
                                <img src="./assets/abstrac.png" style="background:white; border-radius:50%; width:20px; height:20px; padding:5px" class="music">
                            </div> 
                            <div class="caja_mensajes">
                                <div class="barra">
                                    <h2>.</h2>
                                    <p>${v.mensajes.length} comentarios</p>
                                    <p class="close">⨉</p>
                                </div>
                                <div class="comentarios">
                                    
                                </div>
                                <div class="enviar" data-id=${v.id}>
                                    <div class="emojis">
                                        <p>😁</p>
                                        <p>🥰</p>
                                        <p>😂</p>
                                        <p>😳</p>
                                        <p>😏</p>
                                        <p>😅</p>
                                        <p>😟</p>
                                    </div>
                                    <div class="caja_send">
                                        <div class="circle"></div>
                                        <div class="send">
                                            <input class="entrada" type="text" placeholder="añadir comentario...">
                                            <p>@</p>
                                            <img src="./assets/cara.png"> 
                                            <img src="./assets/flecha.png" class="fl animate__animated"> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            `
    let img1 = document.createElement("img")
    img1.src = "./assets/play.png"
    img1.classList.add("img1")

    let video = document.createElement("video")
    video.src = v.url
    video.classList.add("video")
    video.setAttribute("loop",true)

    box_video.append(video)
    box_video.append(img1)
    container.append(box_video)

    video.addEventListener("click",function(){
        cerrarMensajes()
        compartir.classList.remove("co")
        if(video.paused){
            video.play()
            img1.style.display="none"
        }else{
            video.pause()
            img1.style.display="block"
        }
    })
    let ver = new IntersectionObserver(visible, { threshold: 0.6 });
    ver.observe(video)

    function visible(e){
        e.forEach(cadaCaja => {
        const ca = cadaCaja.target
            if(cadaCaja.isIntersecting){
                cerrarMensajes()
                ca.play()
                img1.style.display="none"
                compartir.classList.remove("co")
            }else{
                ca.pause()
            }
        })
    }
})

window.addEventListener("load", function () {
    console.log("'Todos los recursos terminaron de cargar!");
    let def = document.querySelectorAll(".video")
    def[0].play()
});


//interacciones
let like = document.querySelectorAll(".like")
like.forEach(function(li){
    li.addEventListener("click",function(){
        if(li.classList.contains("animate__heartBeat")){
            li.src = "./assets/like-white.png"
            li.classList.remove("animate__heartBeat")
        }else{
            console.log("like")
            li.src = "./assets/like-red.png"
            li.classList.add("animate__heartBeat")
        }
    })
})
let favorito = document.querySelectorAll(".favorito")
favorito.forEach(function(fav){
    fav.addEventListener("click",function(){
        if(fav.classList.contains("animate__bounceIn")){
            fav.src = "./assets/favorito-white.png"
            fav.classList.remove("animate__bounceIn")
        }else{
            fav.src = "./assets/favorito-yellow.png"
            fav.classList.add("animate__bounceIn")
        }
    })
})


let message = document.querySelectorAll(".message")
message.forEach(function(men){
    men.addEventListener("click",function(){
        console.log(men.parentNode.parentNode.children[2])
        men.parentNode.parentNode.children[2].style.bottom="0px"
    })
})

function cerrarMensajes(){
    let cajaMensajes = document.querySelectorAll(".caja_mensajes")
    cajaMensajes.forEach(function(caja){
        caja.style.bottom="-800px"
    })
}

function updateComent(){
    let coment = document.querySelectorAll(".comentarios")
    coment.forEach(function(caja){
        caja.innerHTML = ""
    })
    videos.forEach(function(com,i){
        let mensajesCadaVideo = com.mensajes.reverse()
        mensajesCadaVideo.forEach(function(c){
            coment[i].innerHTML +=`
            <div class="usuario">
                <div class="us-1">
                    <div></div>
                </div>
                <div class="us-2">
                    <h4>${c.usuario} </h4>
                    <p>${c.message} </p>
                    <div>
                        <p><span>27 09</span>  Responder</p>
                        <p class="heart"> <img class="animate__animated" src="./assets/heart.png"> <span>3</span> <img class="animate__animated" src="./assets/dislike.png"></p>
                    </div>
                </div>
            </div>
            `
        })
        
    })
}
updateComent()


let entrada = document.querySelectorAll(".entrada")
let enviar = document.querySelectorAll(".fl")
enviar.forEach(function(e,i){
    e.addEventListener("click",function(p){
        let nuevoMensaje = {
            usuario:'usuario',
            message:entrada[i].value
        }
        console.log(nuevoMensaje)
        let id = e.parentNode.parentNode.parentNode.getAttribute("data-id") - 1
        videos[id].mensajes.push(nuevoMensaje)
        updateComent()
        entrada[i].value = ''
        likeComentarios()
    })
})

entrada.forEach(function(en,i){
    en.addEventListener("click",function(){
        enviar[i].style.display="block"
        enviar[i].classList.add("animate__bounceIn")
        setTimeout(()=>{
            enviar[i].classList.remove("animate__bounceIn")
        },3000)
    })
})
let close_x = document.querySelectorAll(".close")
close_x.forEach(function(cl){
    cl.addEventListener("click",function(){
        cerrarMensajes()
    })
})

function likeComentarios(){
    let heart = document.querySelectorAll(".heart img")
    heart.forEach(function(he){
        he.addEventListener("click",function(e){
            console.log("heart")
            e.target.classList.add("animate__rubberBand")
            setTimeout(()=>{
                e.target.classList.remove("animate__rubberBand")
            },2000)
        })
    })
}
likeComentarios()

let emojis = document.querySelectorAll(".emojis p")
emojis.forEach(function(em){
    em.addEventListener("click",function(e){
        let id = em.parentNode.parentNode.getAttribute("data-id") -1
        entrada[id].value += em.textContent
        enviar[id].style.display="block"
        enviar[id].classList.add("animate__bounceIn")
        setTimeout(()=>{
            enviar[id].classList.remove("animate__bounceIn")
        },3000)
    })
})

let close_share = document.querySelector(".close_share")
close_share.addEventListener("click",function(){
    compartir.classList.remove("co")
})

let share = document.querySelectorAll(".share")
share.forEach((sh)=>{
    sh.addEventListener("click",function(){
        console.log("dhare")
        compartir.classList.add("co")
    })
})
