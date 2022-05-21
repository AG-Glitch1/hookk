let upto = document.querySelector('.upto');

onscroll = function (){
    if(scrollY >= 240){
        upto.classList.add("show");
    } else{
        upto.classList.remove("show");
    }
}
upto.onclick = function(){
    scrollTo ({
        top: 0,
        behavior: "smooth",
    })
}
