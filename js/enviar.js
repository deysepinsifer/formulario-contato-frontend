function Enviar(){

    var $nome = $("#nomeInput");
    var $email = $("#emailInput");
    var $telefone = $("#telefoneInput");
    var $mensagem = $("#mensagemInput");

    var nome = $nome.val();
    var email = $email.val();
    var telefone = $telefone.val();
    var mensagem = $mensagem.val();

    if (nome === "") {
        alert("obrigatório");
        return;
    } else
    if (email === "") {
        alert("obrigatório");
        return;
    } else 
    if (telefone === "") {
        alert("obrigatório");
        return;
    }else
    if (mensagem === "") {
        alert("obrigatório");
        return;
    }
    $.ajax({
        method:"post",
        url: "http://localhost:3000/formulario",
        data: {
            nome: nome,
            email,
            telefone,
            mensagem
        }
      }).done(function() {
        $( this ).addClass( "done" );
        alert("Enviado com sucesso");
        $nome.val("")
        $email.val("")
        $telefone.val("")
        $mensagem.val("")
    }).fail(function(e) {
        alert("Houve um erro ao processar sua solicitação");
      });

}