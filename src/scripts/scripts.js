const btnMenu = document.querySelector(".btnNavMobile")
const menuMobile = document.querySelector(".navBarMobile")

btnMenu.addEventListener("click",()=>{
 
   
    if(menuMobile.classList.contains("close")){
        menuMobile.classList.remove("close")
        menuMobile.classList.add("open")

    }
    else{
        menuMobile.classList.remove("open")
        menuMobile.classList.add("close")
    }
  


})

// efeitos 

window.revelar = ScrollReveal({reset:true})


revelar.reveal(".biografia",{
    duration:3000,
    distance: "50px",
    delay: 400
})
revelar.reveal(".banner",{
    duration:3000,
    distance: "50px",
    delay: 300
})
revelar.reveal(".habilidades",{
    duration:3000,
    distance: "60px",
    delay: 400
})
revelar.reveal(".projetos",{
    duration:3000,
    distance: "60px",
    delay: 400
})

