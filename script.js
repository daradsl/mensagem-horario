function carregar(){
    let texto = window.document.getElementById("msg");
    let img = window.document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    
    texto.innerHTML = `Agora são ${hora} horas e ${min} minutos.`;

    if(hora>=0 && hora<12){  // Bom Dia
        document.querySelector('header').textContent = "Bom Dia! ^-^";
        img.src = 'manha.png';
        document.body.style.background = '#6d9050';
    } else if(hora>=12 && hora<18){     // Boa tarde 
        document.querySelector('header').textContent = "Boa Tarde!  ;-)";
        img.src = 'tarde.png';
        document.body.style.background = '#93867d';
    } else {    // Boa noite
        document.querySelector('header').textContent = "Boa noite!  *-*";
        img.src = 'noite.png';
        document.body.style.background = '#322e3c';
    }
}