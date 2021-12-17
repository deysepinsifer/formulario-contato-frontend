
function excluirContato(id) {
    $.ajax({
        method:"delete",
        url: `http://localhost:3000/formulario/${id}`    
     }).done(function(response) {
        buscarTodos();
    }).fail(function(e) {
        alert("Houve um erro ao processar sua solicitação");
    });
}

function editarContato(id) {
    buscarPorId(id)
}

function buscarPorId(id) {
    $.ajax({
        method:"get",
        url: `http://localhost:3000/formulario/${id}`    
     }).done(function(response) {
        montarModalDeEdicao(response)
    }).fail(function(e) {
        alert("Houve um erro ao processar sua solicitação");
    });
    console.log(id);
}


function montarModalDeEdicao(contato){
    $("#nomeInput").val(contato.nome)
    $("#emailInput").val(contato.email)
    $("#enderecoInput").val(contato.endereco)
    $("#bairroInput").val(contato.bairro)
    $("#cidadeInput").val(contato.cidade)
    $("#estadoInput").val(contato.estado)
    $("#telefoneInput").val(contato.telefone)
    $("#mensagemInput").val(contato.mensagem)
    $("#botaoSalvarDoModal").val(contato.id)
}

function buscarTodos(){
    $.ajax({
        method:"get",
        url: "http://localhost:3000/formulario"    
      }).done(function(contatos) {
      var templateItemString = `
      <tr>
        <th scope="row">#ID#</th>
        <td>#NOME#</td>
        <td>#EMAIL#</td>
        <td>#CEP#</td>
        <td>#ENDERECO#</td>
        <td>#BAIRRO#</td>
        <td>#CIDADE#</td>
        <td>#ESTADO#</td>
        <td>#TELEFONE#</td>
        
        <td>
            <button type="button"  class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onclick="editarContato(#ID#)">Editar</button>
            
            <button type="button" class="btn btn-danger" onclick="excluirContato(#ID#)">Excluir</button>
        </td>
      </tr> 
      ` ;

    
    var listaTransformada = contatos.map(contato => {
       var template = templateItemString.replaceAll("#ID#", contato.id);
       template = template.replace("#NOME#", contato.nome);
       template = template.replace("#EMAIL#", contato.email);
       template = template.replace("#ENDERECO#", contato.endereco);
       template = template.replace("#BAIRRO#", contato.bairro);
       template = template.replace("#CIDADE#", contato.cidade);
       template = template.replace("#ESTADO#", contato.estado);
       template = template.replace("#TELEFONE#", contato.telefone);
      
       return template;
    });

    $("#resultados").html(listaTransformada.join(""));

    }).fail(function(e) {
        alert("Houve um erro ao processar sua solicitação");
    });

    

}


function atualizarPorId(){

    var $nome = $("#nomeInput");
    var $email = $("#emailInput");
    var $cep = $("#ceplInput");
    var $logradouro = $("#logradouroInput");
    var $endereco = $("#enderecoInput");
    var $bairro = $("#bairroInput");
    var $complemento = $("#complementoInput");
    var $cidade = $("#cidadeInput");
    var $estado = $("#estadoInput");
    var $tipo = $("#tipoInput");
    var $telefone = $("#telefoneInput");

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
    if (logradouro === "") {
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
    }

    var id = $("#botaoSalvarDoModal").val();
    $.ajax({
        method:"put",
        url: `http://localhost:3000/formulario/${id}`,
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
            telefone
        }
      }).done(function() {
        $( this ).addClass( "done" );
        alert("Enviado com sucesso");
        buscarTodos();
    }).fail(function(e) {
        alert("Houve um erro ao processar sua solicitação");
      });
      buscarTodos();
}