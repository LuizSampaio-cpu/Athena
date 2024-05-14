import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/LoginResponse.types';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(user: String, password: String) {

    return this.httpClient.post<LoginResponse>("/login", {user, password}).pipe(tap((value) =>
      {
        sessionStorage.setItem("auth-token", value.token),
        sessionStorage.setItem("username", value.name)})
      )
  }
}
