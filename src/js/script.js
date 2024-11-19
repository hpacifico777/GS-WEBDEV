
window.onload = function() {
    const paginaAtual = window.location.pathname.split('/').pop();

    if (paginaAtual === 'index.html' || paginaAtual === '') {
        alert('Seja bem-vindo(a) a Sustenergy!');
    }
};
const buttonVerde = document.getElementById('verde');
const buttonRosa = document.getElementById('rosa');
const buttonCiano = document.getElementById('ciano');
const buttonBranco = document.getElementById('branco')
function mudarCor(cor) {
    document.body.style.backgroundColor = cor;
}
buttonBranco.addEventListener('click', () => mudarCor('#fff'))
buttonVerde.addEventListener('click', () => mudarCor('#8cd66e'));
buttonRosa.addEventListener('click', () => mudarCor('#fa34e0'));
buttonCiano.addEventListener('click', () => mudarCor('#23c4cf'));
let imagens = [
    "/src/assets/imagem1.png",
    "/src/assets/imagem2.png",
    "/src/assets/imagem3.png",
    "/src/assets/imagem4.png",
];
let i = 0;
let time = 3000;
function slideShow(){
    document.getElementById("image").src = imagens[i];
    i++;
    if(i == imagens.length){i = 0};
    setTimeout("slideShow()", time);
}
slideShow();

