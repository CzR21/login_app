import { Injectable } from '@angular/core';
import { ApiConfiguration } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = ApiConfiguration.apiKey

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient){ }

  buscarUsuarios(): Observable<any> {
    const apiUrl = `${url}/Usuarios/buscar-usuarios`;

    const token = localStorage.getItem("token");

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      }),
    }

    return this.http.get<boolean>(apiUrl, httpOptions);
  }
  
  remover(iduser: any): Observable<any> {
    const apiUrl = `${url}/Usuarios/remover-usuario/${iduser}`;

    const token = localStorage.getItem("token");

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      }),
    }

    return this.http.delete<boolean>(apiUrl, httpOptions);
  }
}