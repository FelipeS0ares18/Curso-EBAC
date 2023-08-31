$(document).ready(function() {

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao_cancelar').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        
        const tarefa = $('#input_tarefa').val();
        
        if (tarefa.trim() !== '') {
            const tarefaNova = $('<li></li>');
            const checkbox = $('<input type="checkbox">');
            const label = $('<label></label>').text(tarefa);

            checkbox.appendTo(tarefaNova);
            label.appendTo(tarefaNova);
            
            tarefaNova.hide();
            $('ul').append(tarefaNova);
            tarefaNova.fadeIn();

            $('#input_tarefa').val('');
        }
    })
});
