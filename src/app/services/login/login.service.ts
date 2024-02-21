import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfiguration } from '../../../environments/environment';
import { Observable } from 'rxjs';

const url = ApiConfiguration.apiKey

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient){ }

  login(email: string, senha: string): Observable<any> {
    const apiUrl = `${url}/Autenticacao/login`;

    const data = {
      email: email,
      senha: senha
    };

    return this.http.post<boolean>(apiUrl, data);
  }

  
  cadastro(nome: string, email: string, numero: string, senha: string): Observable<any> {
    const apiUrl = `${url}/Autenticacao/registrar`;

    const data = {
      nome: nome,
      celular: numero,
      email: email,
      senha: senha,
    };

    return this.http.post<boolean>(apiUrl, data);
  }

  redefinirSenha(email: string, senha: string): Observable<any> {
    const apiUrl = `${url}/Autenticacao/redefinir-senha`;

    const data = {
      email: email,
      senha: senha
    };

    return this.http.post<boolean>(apiUrl, data);
  }

}
