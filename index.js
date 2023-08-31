const form = document.getElementById ('form_contato')
const Contato = [];
const Numero = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adcLinha()
    attTabela()
})

function adcLinha () {
    const inputContato = document.getElementById ('nome_contato')
    const inputNumero = document.getElementById ('numero_contato')
    
    if(Numero.includes(parseInt(inputNumero.value))) {
        alert(`O numero: ${inputNumero.value} ja está cadastrado em outro contato`)
    }else {
        Contato.push(inputContato.value)
        Numero.push(parseInt(inputNumero.value))

        let linha = '<tr>'
        linha += `<td> ${inputContato.value} </td>`
        linha += `<td> ${inputNumero.value} </td>`
        linha += '</tr>'
        
        linhas += linha;

    }
}

function attTabela () {
    const tabela = document.querySelector('tbody')
    tabela.innerHTML = linhas
}