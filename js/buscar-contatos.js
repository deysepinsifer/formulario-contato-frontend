function buscar(){
    $.ajax({
        method:"get",
        url: "http://localhost:3000/formulario"    
      }).done(function(contatos) {
      var templateItemString = `
      <tr>
        <th scope="row">#ID#</th>
        <td>#NOME#</td>
        <td>#TELEFONE#</td>
        <td>#EMAIL#</td>
      </tr> 
      ` ;
    
    var listaTransformada = contatos.map(contato => {
       var template = templateItemString.replace("#ID#", contato.id);
       template = template.replace("#NOME#", contato.nome);
       template = template.replace("#TELEFONE#", contato.telefone);
       template = template.replace("#EMAIL#", contato.email);
       return template;
    });

    $("#resultados").html(listaTransformada.join(""));

    }).fail(function(e) {
        alert("Houve um erro ao processar sua solicitação");
    });
}

buscar();
