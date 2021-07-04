//$(seletor).ação(); exemplo de como deve ser a declaração em jquery.
/*$(document).ready(function(){
    $('button').click(function(){
        $('h1').hide();
    });

});*/

//Função simplificada

 /*$(function(){
    $('#azul').click(function(){
        $('p').css("background-color","blue");
       // $('p').hide();
       $('p')
       .fadeOut()
       .delay(1000)
       .fadeIn();
    });
    $('#vermelho').click(function(){
        $('p').css("background-color","red");
       /* $('p').fadeOut(3000);
        $('p').delay(1000);
        $('p').fadeIn(5000);
        $('#mensagem')
        .text("Cor Alterada com Sucesso")
        .css({color:'red',border: '1px solid red'/*, backgroundColor:'#F08080' (aqui o backgroundColor tem prioridade sobre a class green aplicada por meio da folha de estilo css, por esse motivo foi excluida do código//})
        //.css('border', '1px solid red')
        .delay(3000)
        .fadeOut('fast')
        .addClass('green')

        $('button').removeClass('red');
    });
});*/

$(function(){
    $('#l1').click(function(){
        $('#i1').show();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').hide();
        $('#i5').hide();
    });

    $('#l2').click(function(){
        $('#i1').hide();
        $('#i2').show();
        $('#i3').hide();
        $('#i4').hide();
        $('#i5').hide();
    });

    $('#l3').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').show();
        $('#i4').hide();
        $('#i5').hide();
    });

    $('#l4').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').show();
        $('#i5').hide();
    });

    $('#l5').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').hide();
        $('#i5').show();
    });
}); 

//$('#Teste').val(10);
