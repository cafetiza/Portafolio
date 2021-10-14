
const about = document.querySelector('.SobreMi');
const skills = document.querySelector('.habilidades');
const contact = document.querySelector('.contactame');
const cv = document.querySelector('.cv');
const numero = document.querySelector('.num');
const developer = document.querySelector('.containerD');
const dataA = document.querySelector('.containerA');
const progress = document.querySelectorAll(".progress");

const BtnP = document.querySelector('#Developer');
const BtnA = document.querySelector('#DataA');

var myVar1,myVar2,myVar3;

/*nav*/
document.querySelector('#about').onclick = function () {
    setTimeout(function () {
        about.style = "visibility: visible;";
    }, 220);

    setTimeout(function () {
        skills.style = "visibility: hidden; ";
        contact.style = "visibility: hidden;";
        cv.style = "visibility: hidden;";
        numero.style = "visibility: hidden;";
        developer.style = "visibility: hidden;";
        dataA.style = "visibility: hidden;";
    }, 200);

    setTimeout(() => {
        dataA.style = "opacity: 0;";
        developer.style = "opacity: 0;";
        skills.style = "visibility: hidden;";
    }, .005);
}

document.querySelector('#skills').onclick = function () {
    /*pulsaciones de botones*/
    myVar1 = setInterval(function(){ 
        BtnP.style= "color: rgb(30, 221, 164); font-weight: 700;";
    }, 1000);

    myVar2 = setInterval(function(){ 
        BtnA.style= "color: rgb(30, 221, 164); font-weight: 700;";
    }, 1500);

    myVar3 = setInterval(function(){ 
        BtnP.style= "color:white; font-weight: 500;";
        BtnA.style= "color:white; font-weight: 500;";
    }, 6000);
    
    /*muestra skills*/
    setTimeout(function () {
        skills.style = "visibility: visible;";
    }, 220);

    /*oculta las otras ventanas*/
    setTimeout(function () {
        about.style = "visibility: hidden;";
        contact.style = "visibility: hidden;";
        cv.style = "visibility: hidden;";
        numero.style = "visibility: hidden;";
    }, 200);

}

document.querySelector('#contact').onclick = function () {
    setTimeout(function () {
        contact.style = "visibility: visible;";
    }, 220);

    setTimeout(function () {
        cv.style = "visibility: hidden;";
        skills.style = "visibility: hidden;";
        about.style = "visibility: hidden;";
        numero.style = "visibility: hidden;";
        developer.style = "visibility: hidden;";
        dataA.style = "visibility: hidden;";
    }, 200);

    setTimeout(() => {
        dataA.style = "opacity: 0;";
        developer.style = "opacity: 0;";
        skills.style = "visibility: hidden;";
    }, .005);
}

document.querySelector('#cv').onclick = function () {
    setTimeout(function () {
        cv.style = "visibility: visible;";
    }, 220);

    setTimeout(function () {
        contact.style = "visibility: hidden;";
        skills.style = "visibility: hidden;";
        about.style = "visibility: hidden;";
        numero.style = "visibility: hidden;";
        developer.style = "visibility: hidden;";
        dataA.style = "visibility: hidden;";
    }, 200);

    setTimeout(() => {
        dataA.style = "opacity: 0;";
        developer.style = "opacity: 0;";
        skills.style = "visibility: hidden;";
    }, .005);
}

/*Numero*/
document.querySelector('.fa-whatsapp').onclick = function () {
    numero.style = "visibility: visible; opacity: 1;";
}

/*menu Skills*/
BtnP.onclick = function () {
    /*detenemos las pulsaciones*/
    clearInterval(myVar1);
    clearInterval(myVar2);
    clearInterval(myVar3);

    /*ocultamos skills data*/
    setTimeout(() => {
        dataA.style = "opacity: 0; visibility: hidden;";
    }, .005);

    /*mostramos skills data*/
    setTimeout(() => {
        developer.style = "opacity: 1; visibility: visible;";

        progress[0].style = `background: linear-gradient(45deg, #1fe6ff,#673AB7); 
                            animation: animate 4s ease-in-out forwards;
                            width:90%;`;
        progress[1].style = `background: linear-gradient(45deg, #1fe6ff,#673AB7); 
                            animation: animate 4s ease-in-out forwards;
                            width:70%;`;
        progress[2].style = `background: linear-gradient(45deg, #1fe6ff,#673AB7); 
                            animation: animate 4s ease-in-out forwards;
                            width:70%;`;
        progress[3].style = `background: linear-gradient(45deg, #1fe6ff,#673AB7); 
                            animation: animate 4s ease-in-out forwards;
                            width:50%;`;
        progress[4].style = `background: linear-gradient(45deg, #1fe6ff,#673AB7); 
                            animation: animate 4s ease-in-out forwards;
                            width:85%;`;
    }, 10);
}

BtnA.onclick = function () {
    
    clearInterval(myVar1);
    clearInterval(myVar2);
    clearInterval(myVar3);

    
    setTimeout(() => {
        
        developer.style = "opacity: 0; visibility: hidden;";
    }, .005);

    setTimeout(() => {
        dataA.style = "opacity: 1; visibility: visible;";

        progress[5].style = `background: linear-gradient(45deg, #a9ff1f,#b73a3a); 
                            animation: animate 4s ease-in-out forwards;
                            width:70%;`;
        progress[6].style = `background: linear-gradient(45deg, #a9ff1f,#b73a3a); 
                            animation: animate 4s ease-in-out forwards;
                            width:70%;`;
        progress[7].style = `background: linear-gradient(45deg, #a9ff1f,#b73a3a); 
                            animation: animate 4s ease-in-out forwards;
                            width:90%;`;
    }, 10);

    
}

