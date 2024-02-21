import { Component } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService: LoginService, private router: Router) { }

  email: string = ''
  senha: string = ''
  errorText?: string

  login() {
    this.errorText = undefined
    this.loginService.login(this.email, this.senha).subscribe({
      next: (response) => {
        const { idUsuario, nomeUsuario, token, } = response.dados;

        localStorage.setItem("idUsuario", idUsuario)
        localStorage.setItem("nomeUsuario", nomeUsuario)
        localStorage.setItem("token", token)
        
        this.router.navigate(['home'])
      },
      error: (error) => {
        this.errorText = error.error.mensagem;
      }
    });
  }

  changeEmail = (event: any) => this.email = event
  changeSenha = (event: any) => this.senha = event

  esqueciSenha = () => this.router.navigate(['redefinir-senha'])
  cadastro = () => this.router.navigate(['cadastro'])
}
