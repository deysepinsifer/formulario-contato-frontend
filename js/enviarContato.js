function enviarContato(){

    var $nome = $("#nomeInput");
    var $email = $("#emailInput");
    var $cep = $("#cepInput");
    var $logradouro = $("#inputLogradouro");
    var $endereco = $("#enderecoInput");
    var $bairro = $("#bairroInput");
    var $complemento = $("#complementoInput");
    var $cidade = $("#cidadeInput");
    var $estado = $("#estadoInput");
    var $tipo = $("#tipoInput");
    var $telefone = $("#telefoneInput");
    var $mensagem = $("#mensagemInput");

    var nome = $nome.val();
    var email = $email.val();
    var cep = $cep.val();
    var logradouro = $logradouro.val();
    var endereco = $endereco.val();
    var bairro = $bairro.val();
    var complemento = $complemento.val();
    var cidade = $cidade.val();
    var estado = $estado.val();
    var tipo = $tipo.val();
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
    if ( logradouro === "") {
        alert("obrigatório");
        return;
    } else 
    if (endereco === "") {
        alert("obrigatório");
        return;
    } else
    if (bairro === "") {
        alert("obrigatório");
        return;   
    } else 
    if (cidade === "") {
        alert("obrigatório");
        return;
    } else 
    if (estado === "") {
        alert("obrigatório");
        return;
    } else 
    if (tipo === "") {
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
            cep,
            logradouro,
            endereco,
            bairro,
            complemento,
            cidade,
            estado,
            tipo,
            telefone,
            mensagem
        }
      }).done(function() {
        $( this ).addClass( "done" );
        alert("Enviado com sucesso");
        $nome.val("")
        $email.val("")
        $cep.val("")
        $logradouro.val("")
        $endereco.val("")
        $bairro.val("")
        $complemento.val("")
        $cidade.val("")
        $estado.val("")
        $tipo.val("")
        $telefone.val("")
        $mensagem.val("")
    }).fail(function(e) {
        alert("Houve um erro ao processar sua solicitação");
      });

}