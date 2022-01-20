function excluirContato(id) {

    var confirmacao = confirm("Tem certeza que deseja excluir o registro?");

    if (confirmacao != true) {
        return;
    }

    $.ajax({
        method: "delete",
        url: `http://localhost:3000/formulario/${id}`
    }).done(function (response) {
        buscarTodos();
        alert("Deletado com sucesso");
    }).fail(function (e) {
        alert("Houve um erro ao processar sua solicitação");
    });
}

function editarContato(id) {
    $.ajax({
        method: "put",
        url: `http://localhost:3000/formulario/${id}`
    }).done(function (response) {
        buscarPorId(id)
    }).fail(function (e) {
        alert("Houve um erro ao processar sua solicitação");
    });
    console.log(id);

}

function buscarPorId(id) {
    $.ajax({
        method: "get",
        url: `http://localhost:3000/formulario/${id}`
    }).done(function (response) {
        montarModalDeEdicao(response)
    }).fail(function (e) {
        alert("Houve um erro ao processar sua solicitação");
    });
    console.log(id);
}


function montarModalDeEdicao(contato) {
    $("#idInput").val(contato.id)
    $("#nomeInput").val(contato.nome)
    $("#emailInput").val(contato.email)
    $("#cepInput").val(contato.cep)
    $("#tipoDeLogradouroInput").val(contato.tipoDeLogradouro)
    $("#logradouroInput").val(contato.logradouro)
    $("#bairroInput").val(contato.bairro)
    $("#cidadeInput").val(contato.cidade)
    $("#estadoInput").val(contato.estado)
    $("#tipoInput").val(contato.tipo)
    $("#dddInput").val(contato.ddd)
    $("#telefoneInput").val(contato.telefone)
    $("#mensagemInput").val(contato.mensagem)
    $("#botaoSalvarDoModal").val(contato.id)
}

function buscarTodos() {
    $.ajax({
        method: "get",
        url: `http://localhost:3000/formulario/`
    }).done(function (contatos) {
        var templateItemString = `
      <tr>
        <th scope="row">#ID#</th>
        <td>#NOME#</td>
        <td>#EMAIL#</td>
        <td>#LOGRADOURO#</td>
        <td>#BAIRRO#</td>
        <td>#CIDADE#</td>
        <td>#TELEFONE#</td>
        
        <td>
            <button type="button"  class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onclick="buscarPorId(#ID#)">Editar</button>
        </td>
        <td>
            <button type="button" class="btn btn-danger" onclick="excluirContato(#ID#)">Excluir</button>
        </td>
      </tr> 
      ` ;

        //trocando as informações antigas pelas novas

        var listaTransformada = contatos.map(contato => {
            var template = templateItemString.replaceAll("#ID#", contato.id);
            template = template.replace("#NOME#", contato.nome);
            template = template.replace("#EMAIL#", contato.email);
            template = template.replace("#LOGRADOURO#", contato.logradouro ? contato.logradouro : "");
            template = template.replace("#BAIRRO#", contato.bairro ? contato.bairro : "");
            template = template.replace("#CIDADE#", contato.cidade ? `${contato.cidade} - ${contato.estado}` : ""); //concatenando a cidade com o estado
            template = template.replace("#TELEFONE#", contato.telefone ? contato.telefone : "");

            return template;
        });

        $("#resultados").html(listaTransformada.join(""));

    }).fail(function (e) {
        alert("Houve um erro ao processar sua solicitação");
    });



}


buscarTodos();
