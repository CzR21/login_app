import { Component } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrl: './esqueci-senha.component.css'
})
export class EsqueciSenhaComponent {

  constructor(private loginService: LoginService, private router: Router) { }

  email: string = ''
  senha: string = ''
  errorText?: string
  confirmaSenha: string = ''

  redefinirSenha() {
    var validate = this.validateForm()
    if(validate){
      this.errorText = undefined
      this.loginService.redefinirSenha(this.email, this.senha).subscribe({
        next: (response) => this.router.navigate(['login']),
        error: (error) => this.errorText = error.error.mensagem
      });
    }
  }

  validateForm() : boolean{
    if(this.email == ""){
      this.errorText = "E-mail é obrigatório"
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
  changeConfimaSenha = (event: any) => this.confirmaSenha = event
}