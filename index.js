$(document).ready(function() {


    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao_cancelar').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const URL_img = $('#input_img').val();
        const URL_nova_img = $('<li style="display: none"</li>');
        $(`<img src="${URL_img}" />`).appendTo(URL_nova_img)

        $(`<div class="overlay_img_link"
            <a href="${URL_img}" target="_blank" title="Ver imagem em tamanho real"> Ver imagem em tamanho real
            </a>
        </div>`).appendTo(URL_nova_img)
        $(URL_nova_img).appendTo('ul')
        $(URL_nova_img).fadeIn();

        $('#input_img').val('')
    })
})

