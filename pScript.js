// For toggle

let active = document.querySelector(".active"); 
let menutoggle = document.getElementById("toggle");
console.log(menutoggle)
console.log(active);
menutoggle.addEventListener('click',function(){
    console.log("clicking");
    if(menutoggle.firstChild.classList.contains('fa-bars')){
        menutoggle.firstChild.classList.replace('fa-bars','fa-times');
    }
    else{
        menutoggle.firstChild.classList.replace('fa-times','fa-bars');
    }
    active.classList.toggle('active');
})