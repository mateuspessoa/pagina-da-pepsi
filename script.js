document.getElementById('lata-1').addEventListener('click', changeBlue);
document.getElementById('lata-2').addEventListener('click', changeRed);
document.getElementById('lata-3').addEventListener('click', changeBlack);

function changeBlue() {
    document.getElementById('imagem-1').style.display = 'block';
    document.getElementById('imagem-2').style.display = 'none';
    document.getElementById('imagem-3').style.display = 'none';
    document.getElementById('fundo').style.backgroundColor = '#0261BF';
}

function changeRed() {
    document.getElementById('imagem-1').style.display = 'none';
    document.getElementById('imagem-2').style.display = 'block';
    document.getElementById('imagem-3').style.display = 'none';
    document.getElementById('fundo').style.backgroundColor = 'red';
}

function changeBlack() {
    document.getElementById('imagem-1').style.display = 'none';
    document.getElementById('imagem-2').style.display = 'none';
    document.getElementById('imagem-3').style.display = 'block';
    document.getElementById('fundo').style.backgroundColor = 'black';
}
