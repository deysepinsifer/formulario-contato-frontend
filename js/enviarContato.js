

function enviarContato() {

    var $nome = $("#nomeInput");
    var $email = $("#emailInput");
    var $cep = $("#cepInput");
    var $tipoDeLogradouro = $("#tipoDeLogradouroInput");
    var $logradouro = $("#logradouroInput");
    var $numero = $("#numeroInput");
    var $complemento = $("#complementoInput");
    var $bairro = $("#bairroInput");
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
    var complemento = $complemento.val();
    var bairro = $bairro.val();
    var cidade = $cidade.val();
    var estado = $estado.val();
    var tipo = $tipo.val();
    var ddd = $ddd.val();
    var telefone = $telefone.val();
    var mensagem = $mensagem.val();

    const valido = oFormularioEstaValido(nome, email, cep, tipoDeLogradouro, logradouro, bairro, cidade, estado, tipo, ddd, telefone, mensagem);

    if (!valido) {
        return;
    }

    $.ajax({
        method: "post",
        url: "http://localhost:3000/formulario",
        data: {
            nome,
            email,
            cep,
            tipoDeLogradouro,
            logradouro,
            numero,
            complemento,
            bairro,
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
        limparFormulario();
    }).fail(function (erro) {

        console.log("enviarContato ERROR", erro);

        if (erro.status === 409) {
            var confirmacao = confirm("Já existe um cadastro para o email informado, deseja atualizar os dados por estes novos?");

            if (confirmacao == true) {
                atualizar();
                return;
            }

            return;
        }

        alert("Houve um erro ao processar sua solicitação", erro);
    });
}

const limparFormulario = () => {

    var $nome = $("#nomeInput");
    var $email = $("#emailInput");
    var $cep = $("#cepInput");
    var $tipoDeLogradouro = $("#tipoDeLogradouroInput");
    var $logradouro = $("#logradouroInput");
    var $numero = $("#numeroInput");
    var $complemento = $("#complementoInput");
    var $bairro = $("#bairroInput");
    var $cidade = $("#cidadeInput");
    var $estado = $("#estadoInput");
    var $tipo = $("#tipoInput");
    var $ddd = $("#dddInput");
    var $telefone = $("#telefoneInput");
    var $mensagem = $("#mensagemInput");

    $nome.val("")
    $email.val("")
    $cep.val("")
    $tipoDeLogradouro.val("")
    $logradouro.val("")
    $numero.val("")
    $complemento.val("")
    $bairro.val("")
    $cidade.val("")
    $estado.val("")
    $tipo.val("")
    $ddd.val("")
    $telefone.val("")
    $mensagem.val("")
}

const oFormularioEstaValido = (nome, email, cep, tipoDeLogradouro, logradouro, bairro, cidade, estado, ddd, tipo, telefone, mensagem) => {

    if (nome === "") {
        alert("Nome obrigatório");
        return false;
    } else
        if (email === "") {
            alert("Email obrigatório");
            return false;
        } else
            if (cep === "") {
                alert("Cep obrigatório");
                return false;
            } else
                if (tipoDeLogradouro === "") {
                    alert("Tipo de Logradouro obrigatório");
                    return false;
                } else
                    if (logradouro === "") {
                        alert("Logradouro obrigatório");
                        return false;

                    } else
                        if (bairro === "") {
                            alert("Bairro obrigatório");
                            return false;
                        } else

                            if (cidade === "") {
                                alert("cidade obrigatório");
                                return false;
                            } else
                                if (estado === "") {
                                    alert("estado obrigatório");
                                    return false;
                                } else
                                    if (tipo === "") {
                                        alert("tipo de numero obrigatório");
                                        return false;
                                    } else
                                        if (ddd === "") {
                                            alert("DDD obrigatório");
                                            return false;
                                        } else

                                            if (telefone === "") {
                                                alert("Telefone obrigatório");
                                                return false;
                                            } else
                                                if (mensagem === "") {
                                                    alert("Mensagem obrigatória");
                                                    return false;
                                                }

    return true;
}
