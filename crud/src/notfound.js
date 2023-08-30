function textoRandom(){
    var texto = ("404notfound");
    var letra = texto[Math.floor(Math.random() * texto.length)];
    return letra;
}

function lluvia(){
    let nube = document.querySelector('.nube');
    let e = document.createElement('div');
    let left = Math.floor(Math.random() * 310);
    let tamanyo = Math.random() * 1.5;
    let duracion = Math.random() * 1;

    e.classList.add('text');
    nube.appendChild(e);
    e.innerText = textoRandom();
    e.style.left = left + 'px';
    e.style.fontSize = 0.5 + tamanyo + 'em';
    e.style.animationDuration = 1 + duracion + 's';

    setTimeout(function(){
        nube.removeChild(e);
    }, 2000)
}

setInterval(function(){
    lluvia();
},20)