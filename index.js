
    const form = document.getElementById('form_atividade');
    const aprovado = '<img src="./images/icons8-verified-account-94.png" />';
    const reprovado = '<img src="./images/icons8-x-94.png" />';

    let linhas = '';

    form.addEventListener('submit', function(e){
        e.preventDefault();

        const inputNomeAtividade = document.getElementById('nome_atividade');
        const inputNotaAtividade = document.getElementById('nota_atividade');
        

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= 7 ? aprovado : reprovado}`;
        linha += '</tr>'

        linhas += linha;

        const tabela = document.querySelector ('tbody');
        tabela.innerHTML = linhas

        inputNomeAtividade.value = '';
        inputNotaAtividade.value = '';
    
    });
