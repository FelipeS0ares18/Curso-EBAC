
const form = document.getElementById('form_atividade');
const aprovado = '<img src="./images/icons8-verified-account-94.png" />';
const reprovado = '<img src="./images/icons8-x-94.png" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adcLinha();
    attTabela();
    attMedia();
});

function adcLinha() {
    const inputNomeAtividade = document.getElementById('nome_atividade');
    const inputNotaAtividade = document.getElementById('nota_atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} ja foi inserida`)
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
        
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= 7 ? aprovado : reprovado}`;
        linha += '</tr>'
    
        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function attTabela () {
    const tabela = document.querySelector ('tbody');
    tabela.innerHTML = linhas
}


function attMedia () {
    const mediaFinal = calculoMedia ();

    document.getElementById('mediaValor').innerHTML = mediaFinal
    document.getElementById('mediaResultado').innerHTML = mediaFinal >=  7 ? spanAprovado : spanReprovado;
}

function calculoMedia () {
    let soma = 0;
    
    for (let i =0; i < notas.length; i++) {
        soma += notas[i];
    }

    return soma / notas.length;
}