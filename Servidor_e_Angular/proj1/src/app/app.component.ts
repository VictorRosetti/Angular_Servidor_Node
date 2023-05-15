import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj1';
  Conectar(){
    $.get("http://localhost:3000/", 
    function(resultado)
    {
      console.log(resultado);
    });
  }

  EnviarDados(ID:string,nome:string, idade:string, profissao:string,salario:string)
  {
    var json = 
    {
      "ID": ID, 
      "nome":nome, 
      "idade":idade, 
      "profissao":profissao, 
      "salario":salario
    };
    //console.log("JSON:"+json+valor);
    $.post("http://localhost:3000/dado",
    json,
    function (msg)
    {
      console.log(msg);
    } );
  }
  valor="";
  AlterarCampo(valorCaixa:string)
  {
    this.valor=valorCaixa;
  }
  Clicando()
  {
    $.get("http://localhost:3000/tudo", 
    (resultado) =>
    {
      this.valor=JSON.stringify(resultado);
    });
  }
  
}
