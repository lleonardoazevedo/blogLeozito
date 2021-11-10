import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( 
  private http: HttpClient
  ){ }

  entrar(userLogin: UserLogin):Observable<UserLogin>{
    return this.http.post<UserLogin>('https://blogdoleo.herokuapp.com/api/v1/usuarios/logar', userLogin)

  }
  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://blogdoleo.herokuapp.com/api/v1/usuarios/cadastrar', usuario)

  }
}
