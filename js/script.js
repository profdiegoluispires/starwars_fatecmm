
//função para retornar posições aleatórias
function pegarPosicoesRandom(){
    var y = window.innerWidth;
    var x = window.innerHeight;

    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
}

// CHAMANDO NA PRIMEIRA VEZ QUE FOR CARREGADA A PÁGINA
criarEstrelas();

function criarEstrelas() {
    //Criando variavel star com LOOP
    let numStars = 100;
    for (let cont = 0; cont < numStars; cont++) {
        let star = document.createElement("div");

        xy = pegarPosicoesRandom();
        //Adicionando atributos na tag div
        star.className = "star";
        star.style.top = xy[0] + "px";
        star.style.left = xy[1] + "px";

        //inserindo no documento
        document.body.append(star);
    }
}

// JQuery
$(window).on('resize', function(){
    $('.star').remove();
    criarEstrelas();
});

// JS
//  window.addEventListener('resize', function(){
//    document.querySelectorAll('.star').forEach(function(s) {s.remove()});
//    criarEstrelas();
//});

// DANDO PLAY NA MUSICA DO STAR WARS NO MOMENTO CERTO
setTimeout(function () {
    document.getElementById("audio").play();
}, 7900);


