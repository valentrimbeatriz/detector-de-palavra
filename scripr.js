const botaoExporPalavras = document.querySelector('#botao-termodepesquisa');

botaoExporPalavras.addEventListener('click', termodepesquisa);

function ExporPalavrasChave() {
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavras = texto.split(" ");

    campoResultado.textContent = palavras.join(", ");
}
function processaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);

    let frequencias = {};
    for (let i of palavras) {
        frequencias[i] = 0;
        for (let j of palavras) {
            if (i == j) {
                frequencias[i]++;
            }
        }
    }

    console.log(frequencias);

    return palavras;
}