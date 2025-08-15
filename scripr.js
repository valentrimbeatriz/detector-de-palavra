const botaoExporPalavras = document.querySelector('#botao-termodepesquisa');

botaoMostraPalavras.addEventListener('click', termodepesquisa);

function exporPalavrasChave() {
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavras = texto.split(" ");

    campoResultado.textContent = palavras.join(", ");
}