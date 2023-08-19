const form = document.getElementById('form_deposito')
const nome_beneficiario = document.getElementById('nome_beneficiario')
let validacao = false;


function validaNome (nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >=2;
}

form.addEventListener ('submit', function (e) {

    e.preventDefault();

    const numeroConta = document.getElementById('conta')
    const valor = document.getElementById('valor')
    const descricao = document.getElementById('text')
    const sucesso = `Deposito de: R$ <b>${valor.value}</b> na conta: <b>${numeroConta.value }</b> de: <b>${nome_beneficiario.value}</b> realizado! Descrição: ${descricao.value}`

    validacao = validaNome(nome_beneficiario.value);
    if (validacao) {
        const containerMensagem = document.querySelector('.mensagem_de_sucesso');
        containerMensagem.innerHTML = sucesso;
        containerMensagem.style.display = 'block';

        nome_beneficiario.value = '';
        numeroConta.value = '';
        valor.value = '';
        descricao.value = '';


    }else {
        nome_beneficiario.style.border = 'solid 1px red'
        document.querySelector('.nome_invalido').style.display = 'block'
    }

})

nome_beneficiario.addEventListener('keyup', function(e) {
    validacao = validaNome(e.target.value);

    if (!validacao) {
        nome_beneficiario.style.color = 'red'
        nome_beneficiario.style.outlineColor = 'red'
        document.querySelector('.nome_invalido').style.display = 'block'
    }else {
        nome_beneficiario.style = ''
        document.querySelector('.nome_invalido').style.display = 'none'
    }
})
