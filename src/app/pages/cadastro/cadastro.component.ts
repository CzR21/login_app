import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  
  constructor(private loginService: LoginService, private router: Router) { }

  nome: string = ''
  email: string = ''
  senha: string = ''
  confirmaSenha: string = ''
  numero: string = '' 
  errorText?: string

  cadastro() {
    var validate = this.validateForm()
    if(validate){
      this.errorText = undefined
      this.loginService.cadastro(this.nome, this.email, this.numero, this.senha).subscribe({
        next: (response) => this.router.navigate(['login']),
        error: (error) => this.errorText = error.error.mensagem
      });
    }
  }

  validateForm() : boolean{
    if(this.nome == ""){
      this.errorText = "Nome é obrigatório"
      return false;
    }else if(this.email == ""){
      this.errorText = "E-mail é obrigatório"
      return false;
    } else if(this.numero == ""){
      this.errorText = "Celular é obrigatório"
      return false;
    } else if(this.numero.length != 11){
      this.errorText = "Celular inválido"
      return false;
    } else if(this.senha == ""){
      this.errorText = "Senha é obrigatório"
      return false;
    }else if(this.senha != this.confirmaSenha){
      this.errorText = "A senhas não são iguais"
      return false;
    }
    return true
  }

  changeEmail = (event: any) => this.email = event
  changeSenha = (event: any) => this.senha = event
  changeNumero = (event: any) => this.numero = event
  changeNome = (event: any) => this.nome = event
  changeConfimaSenha = (event: any) => this.confirmaSenha = event

}
