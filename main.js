
const about = document.querySelector('.SobreMi');
const skills = document.querySelector('.habilidades');
const contact = document.querySelector('.contactame');
const cv = document.querySelector('.cv');
const proyect = document.querySelector('.proyectos');
const numero = document.querySelector('.num');
const developer = document.querySelector('.containerD');
const dataA = document.querySelector('.containerA');
const progress = document.querySelectorAll(".progress");

const BtnP = document.querySelector('#Developer');
const BtnA = document.querySelector('#DataA');

const V3 = document.querySelector('#V3');

var myVar1, myVar2, myVar3;

/* redireccion a version 3 */
v3 = setInterval(() => {
    var resultado = window.confirm('Existe una una version de mi CV');
    if (resultado === true) {
        window.alert('¿Quieres ir allá?');
        location.href = "http://johnruiz.epizy.com";
    }else { 
        window.alert('Continuar aquí');
        clearInterval(v3);
    }
}, 30000);

/* btn version 3 */
setInterval(function () {
    V3.style = "color: rgb(209, 41, 41); font-weight: 700;";
}, 1000);

setInterval(function () {
    V3.style = "color: rgb(250, 250, 250); font-weight: 500;";
}, 1500);



/*nav*/
document.querySelector('#about').onclick = function () {
    setTimeout(function () {
        about.style = "visibility: visible;";
    }, 220);

    setTimeout(function () {
        skills.style = "visibility: hidden; ";
        proyect.style = "visibility: hidden;";
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
    myVar1 = setInterval(function () {
        BtnP.style = "color: rgb(30, 221, 164); font-weight: 700;";
    }, 1000);

    myVar2 = setInterval(function () {
        BtnA.style = "color: rgb(30, 221, 164); font-weight: 700;";
    }, 1500);

    myVar3 = setInterval(function () {
        BtnP.style = "color:white; font-weight: 500;";
        BtnA.style = "color:white; font-weight: 500;";
    }, 6000);

    /*muestra skills*/
    setTimeout(function () {
        skills.style = "visibility: visible;";
    }, 220);

    /*oculta las otras ventanas*/
    setTimeout(function () {
        about.style = "visibility: hidden;";
        proyect.style = "visibility: hidden;";
        contact.style = "visibility: hidden;";
        cv.style = "visibility: hidden;";

        numero.style = "visibility: hidden;";
    }, 200);

}

document.querySelector('#proyectos').onclick = function () {
    setTimeout(function () {
        proyect.style = "visibility: visible;";
    }, 220);

    setTimeout(function () {
        about.style = "visibility: hidden;";
        skills.style = "visibility: hidden;";
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

document.querySelector('#contact').onclick = function () {
    setTimeout(function () {
        contact.style = "visibility: visible;";
    }, 220);

    setTimeout(function () {
        about.style = "visibility: hidden;";
        skills.style = "visibility: hidden;";
        proyect.style = "visibility: hidden;";
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

document.querySelector('#cv').onclick = function () {
    setTimeout(function () {
        cv.style = "visibility: visible;";
    }, 220);

    setTimeout(function () {
        about.style = "visibility: hidden;";
        skills.style = "visibility: hidden;";
        proyect.style = "visibility: hidden;";
        contact.style = "visibility: hidden;";

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
        progress[5].style = `background: linear-gradient(45deg, #1fe6ff,#673AB7); 
                            animation: animate 4s ease-in-out forwards;
                            width:75%;`;
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

        progress[6].style = `background: linear-gradient(45deg, #a9ff1f,#b73a3a); 
                            animation: animate 4s ease-in-out forwards;
                            width:70%;`;
        progress[7].style = `background: linear-gradient(45deg, #a9ff1f,#b73a3a); 
                            animation: animate 4s ease-in-out forwards;
                            width:70%;`;
        progress[8].style = `background: linear-gradient(45deg, #a9ff1f,#b73a3a); 
                            animation: animate 4s ease-in-out forwards;
                            width:90%;`;
    }, 10);
}

//popup´s//
/*CARFT CIRLI*/
var btnAbrirPopup = document.getElementById("btn-abrir-popup"),
    overlay = document.getElementById("overlay"),
    popup = document.getElementById("popup"),
    btnCerrarPopup = document.getElementById("btn-cerrar-popup");


btnAbrirPopup.addEventListener("click", function () {
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnCerrarPopup.addEventListener("click", function () {
    overlay.classList.remove('active');
    popup.classList.remove('active');
});


/*Random image*/
var btnAbrirPopup2 = document.getElementById("btn-abrir-popup2"),
    overlay2 = document.getElementById("overlay2"),
    popup2 = document.getElementById("popup2"),
    btnCerrarPopup2 = document.getElementById("btn-cerrar-popup2");


btnAbrirPopup2.addEventListener("click", function () {
    overlay2.classList.add('active');
    popup2.classList.add('active');
});

btnCerrarPopup2.addEventListener("click", function () {
    overlay2.classList.remove('active');
    popup2.classList.remove('active');
});

/*Montoya and john*/
var btnAbrirPopup3 = document.getElementById("btn-abrir-popup3"),
    overlay3 = document.getElementById("overlay3"),
    popup3 = document.getElementById("popup3"),
    btnCerrarPopup3 = document.getElementById("btn-cerrar-popup3");


btnAbrirPopup3.addEventListener("click", function () {
    overlay3.classList.add('active');
    popup3.classList.add('active');
});

btnCerrarPopup3.addEventListener("click", function () {
    overlay3.classList.remove('active');
    popup3.classList.remove('active');
});



