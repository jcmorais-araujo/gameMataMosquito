// Verificar o tamanho da área de onde o game será executado
let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 15;

var criarMosquitoTempo = 1500;

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    criarMosquitoTempo = 1500
} else if (nivel === 'dificil') {
    criarMosquitoTempo = 1000
} else if (nivel === 'insano') {
    criarMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {

    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura);
}
ajustaTamanhoPalcoJogo();

let cronometro = setInterval(function() {
    tempo--

    if (tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criarMosquito);
        window.location.href = 'vitoria.html'

    } else {

        document.getElementById('cronometro').innerHTML = tempo;
    }
}, 1000);

// Realizar a movimentação das figuras (mosquito)
// Gerar movimentação randomica da figura com o Math.radom e multiplicar com o local
// Máximo da altura e largura
// Math.floor = arredonda para baixo
// o -90 foi para evitar que a figura passe um pouco do limite da página
function posicaoRandomica() {
    //    Remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if (vidas > 3) {
            window.location.href = 'gameOver.html'
        } else {

            document.getElementById(`v${vidas}`).src = "img/coracao_vazio.png"
            vidas++;
        }
    }


    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    // Evitar que o mosquito fique em posição fora da área
    if (posicaoX < 0) {
        posicaoX = 0
    } else {
        posicaoX
    }

    if (posicaoY < 0) {
        posicaoY = 0
    } else {
        posicaoY
    }

    console.log(posicaoX, posicaoY)

    // Criar o elemento HTML
    var mosquito = document.createElement('img');
    mosquito.src = 'img/mosquito.png';
    // Relacionar o mosquito com a classe que está no HTML
    mosquito.className = `${tamanhoAleatorio()} ${ladoAleatorio()}`;

    mosquito.style.left = `${posicaoX}px`
    mosquito.style.top = `${posicaoY}px`
    mosquito.style.position = 'absolute';
    //////////////////////
    mosquito.id = 'mosquito';

    // Parte voltada para interação com o mosquito*
    mosquito.onclick = function() {
        mosquito.remove()
    }


    document.body.appendChild(mosquito);

};

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 2);

    if (classe == 0) {
        return 'mosquito1'
    } else if (classe == 1) {
        return 'mosquito2'
    } else {
        return 'mosquito3'
    }
}

// modificar a orientação do mosquito
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 3);

    if (classe == 0) {
        return 'ladoA'
    } else {
        return 'ladoB'
    }
}