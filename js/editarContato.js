function atualizar() {

    var $id = $("#idInput");
    var $nome = $("#nomeInput");
    var $email = $("#emailInput");
    var $cep = $("#cepInput");
    var $tipoDeLogradouro = $("#tipoDeLogradouroInput");
    var $logradouro = $("#logradouroInput");
    var $bairro = $("#bairroInput");
    var $cidade = $("#cidadeInput");
    var $estado = $("#estadoInput");
    var $tipo = $("#tipoInput");
    var $ddd = $("#dddInput");
    var $telefone = $("#telefoneInput");

    var id = $id.val();
    var nome = $nome.val();
    var email = $email.val();
    var cep = $cep.val();
    var tipoDeLogradouro = $tipoDeLogradouro.val();
    var logradouro = $logradouro.val();
    var bairro = $bairro.val();
    var cidade = $cidade.val();
    var estado = $estado.val();
    var tipo = $tipo.val();
    var ddd = $ddd.val();
    var telefone = $telefone.val();


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
                                            }



    var id = $("#botaoSalvarDoModal").val();

    $.ajax({
        method: "put",
        url: `http://localhost:3000/formulario/${id ? id : email}`,
        data: {
            nome,
            email,
            cep,
            tipoDeLogradouro,
            logradouro,
            bairro,
            cidade,
            estado,
            tipo,
            ddd,
            telefone,
        }
    }).done(function () {
        alert("Enviado com sucesso");
        buscarTodos();
    }).fail(function (e) {
        alert("Houve um erro ao processar sua solicitação de edicao");
    });

    console.log("teste");
}