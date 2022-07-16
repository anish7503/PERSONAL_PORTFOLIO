// For toggle button
const toggle=document.querySelector(".tgbtn");

// for changing navigation
const menutoggle = document.querySelector(".toggle");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header");

menutoggle.onclick = function(){
    if(toggle.classList.contains('fa-bars')){
        toggle.classList.replace('fa-bars','fa-times');

        menutoggle.classList.toggle('active');
        navbar.classList.toggle('active');
        header.classList.toggle('active');
    }
    else{
        toggle.classList.replace('fa-times','fa-bars');
        menutoggle.classList.toggle('active');
        navbar.classList.toggle('active');
        header.classList.toggle('active'); 
    }
    
}

navbar.onclick = function(){
    if(toggle.classList.contains('fa-bars')){
        toggle.classList.replace('fa-bars','fa-times');
    }
    else{
        toggle.classList.replace('fa-times','fa-bars'); 
        menutoggle.classList.toggle('active');
        navbar.classList.toggle('active');
        header.classList.toggle('active');
    }
    
}