
const about = document.querySelector('.SobreMi');
const skills = document.querySelector('.habilidades');
const contact = document.querySelector('.contactame');
const cv = document.querySelector('.cv');
const numero = document.querySelector('.num');
var cv1 = "https://drive.google.com/file/d/11NGO8rknhUW4BgRJkbhS1-aKyEkGgXLa/view?usp=sharing";
var cv2

document.querySelector('#about').onclick = function () {
    about.style = "opacity: 1; transition: 4s;";
    skills.style = "opacity: 0; transition: 0.5s;";
    contact.style = "opacity: 0; transition: 0.5s;";
    cv.style = "opacity: 0; transition: 0.5s;";
    /* document.querySelector('#about').style.color = "black"; */
}
document.querySelector('#skills').onclick = function () {
    skills.style = "opacity: 1; transition: 4s;";
    about.style = "opacity: 0; transition: 0.5s;";
    contact.style = "opacity: 0; transition: 0.5s;";
    cv.style = "opacity: 0; transition: 0.5s;";
}
document.querySelector('#contact').onclick = function () {
    contact.style = "opacity: 1; transition: 4s;";
    skills.style = "opacity: 0; transition: 0.5s;";
    about.style = "opacity: 0; transition: 0.5s;";
    cv.style = "opacity: 0; transition: 0.5s;";
}

document.querySelector('#cv').onclick = function () {
    cv.style = "opacity: 1; transition: 4s;";
    contact.style = "opacity: 0; transition: 0.5s;";
    skills.style = "opacity: 0; transition: 0.5s;";
    about.style = "opacity: 0; transition: 0.5s;";
}

/*Numero*/
document.querySelector('.fa-whatsapp').onclick = function () {
    numero.style = "opacity: 1; transition: 2s;";
}


