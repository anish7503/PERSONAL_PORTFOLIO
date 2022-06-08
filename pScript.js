// For toggle
let menutoggle = document.querySelector("#toggle");
let active = document.querySelector(".active");

menutoggle.addEventListener('click', function(){
    if(menutoggle.firstChild.classList.contains('fa-bars')){
        menutoggle.firstChild.classList.replace('fa-bars','fa-times');
    }
    else{
        menutoggle.firstChild.classList.replace('fa-times','fa-bars');
    }
    active.classList.toggle('active');
}
)