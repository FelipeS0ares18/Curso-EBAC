const form = document.getElementById('form_deposito');

function validaNome(nomeCompleto) {
    const nomeArray = nomeCompleto.split(' ');
    return nomeArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nomeBeneficiario = document.getElementById('nome_beneficiario');
    const numeroConta = document.getElementById ('conta')
    const valor = document.getElementById ('valor')
    const sucesso = `Deposito de: R$ ${valor.value} na conta: ${numeroConta.value} de: ${nomeBeneficiario.value} realizado`;

    let validacao = validaNome(nomeBeneficiario.value)
    if (validacao) {
        alert(sucesso);

        nomeBeneficiario.value = '';
        numeroConta.value = '';
        valor.value = '';

    } else {
        alert ('Nome Invalido')
    }
})

console.log(form)