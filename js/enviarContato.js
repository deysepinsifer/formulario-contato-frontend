function enviarContato() {

    var $nome = $("#nomeInput");
    var $email = $("#emailInput");
    var $cep = $("#cepInput");
    var $tipoDeLogradouro = $("#tipoDeLogradouroInput");
    var $logradouro = $("#logradouroInput");
    var $numero = $("#numeroInput");
    var $bairro = $("#bairroInput");
    var $complemento = $("#complementoInput");
    var $cidade = $("#cidadeInput");
    var $estado = $("#estadoInput");
    var $tipo = $("#tipoInput");
    var $ddd = $("#dddInput");
    var $telefone = $("#telefoneInput");
    var $mensagem = $("#mensagemInput");

    var nome = $nome.val();
    var email = $email.val();
    var cep = $cep.val();
    var tipoDeLogradouro = $tipoDeLogradouro.val();
    var logradouro = $logradouro.val();
    var numero = $numero.val();
    var bairro = $bairro.val();
    var complemento = $complemento.val();
    var cidade = $cidade.val();
    var estado = $estado.val();
    var tipo = $tipo.val();
    var ddd = $ddd.val();
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
            if (cep === "") {
                alert("obrigatório");
                return;
            } else
                if (tipoDeLogradouro === "") {
                    alert("obrigatório");
                    return;
                } else
                if (logradouro === "") {
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
                                        if (ddd === "") {
                                            alert("obrigatório");
                                            return;
                                        } else
                                            if (telefone === "") {
                                                alert("obrigatório");
                                                return;
                                            } else
                                                if (mensagem === "") {
                                                    alert("obrigatório");
                                                    return;
                                                }
    $.ajax({
        method: "post",
        url: "http://localhost:3000/formulario",
        data: {
            nome: nome,
            email,
            cep,
            tipoDeLogradouro,
            logradouro,
            numero,
            bairro,
            complemento,
            cidade,
            estado,
            tipo,
            ddd,
            telefone,
            mensagem
        }
    }).done(function () {
        $(this).addClass("done");
        alert("Enviado com sucesso");
        $nome.val("")
        $email.val("")
        $cep.val("")
        $tipoDeLogradouro.val("")
        $logradouro.val("")
        $numero.val("")
        $bairro.val("")
        $complemento.val("")
        $cidade.val("")
        $estado.val("")
        $tipo.val("")
        $ddd.val("")
        $telefone.val("")
        $mensagem.val("")
    }).fail(function (e) {
        alert("Houve um erro ao processar sua solicitação");
    });

  
}
