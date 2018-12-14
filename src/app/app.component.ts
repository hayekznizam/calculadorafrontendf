import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numeroUm: number =2;
  numeroDois: number =10;
  operacao: string  ='SOMA';

  response: any = ('');

constructor(private http: HttpClient){}




  onClickExecutarOperacao(){
    const calculo = {
      numeroUm: this.numeroUm,
      numeroDois: this.numeroDois,
      operacao: this.operacao,
      

    };

    
    this.http.post('https://calculadoraviniciusandrei.herokuapp.com/api/calculadora',calculo).
    subscribe(response =>this.response = response);



  }
}
