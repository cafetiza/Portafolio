
const about = document.querySelector('.SobreMi');
const skills = document.querySelector('.habilidades');
const contact = document.querySelector('.contactame');
const cv = document.querySelector('.cv');
const numero = document.querySelector('.num');
const developer = document.querySelector('.containerD');
const dataA = document.querySelector('.containerA');

const progress = document.querySelectorAll(".progress");

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
    setTimeout(function () {
        skills.style = "visibility: visible;";
    }, 220);

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
    numero.style = "visibility: visible; transition: 4s;";
}

/*menu Skills*/
document.querySelector('#Developer').onclick = function () {

    setTimeout(() => {
        dataA.style = "opacity: 0; visibility: hidden;";
    }, .005);

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

document.querySelector('#DataA').onclick = function () {
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

