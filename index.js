const form = document.getElementById('form_numero');

function validaNumero(numeroA, numeroB) {
    return numeroB > numeroA;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const numeroA = parseFloat(document.getElementById('numeroA').value);
    const numeroB = parseFloat(document.getElementById('numeroB').value);

    const validacao = validaNumero(numeroA, numeroB);
    const sucessoMsg = document.querySelector('.sucesso');
    const erroMsg = document.querySelector('.erro');

    if (validacao) {
        sucessoMsg.style.display = 'block';
        setTimeout(function () {
            sucessoMsg.style.display = 'none';
        }, 2000); 
    } else {
        erroMsg.style.display = 'block';
        setTimeout(function () {
            erroMsg.style.display = 'none';
        }, 2000); 
    }
});
