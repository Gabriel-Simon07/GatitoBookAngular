import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
    ) { }

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient.post(
      `${API}/user/login`,
    {
      userName: usuario,
      password: senha
    },
    {observe: 'response' }
  ).pipe(
      tap((resp) => {
        const authToken = resp.headers.get('x-access-token') ?? '';
        this.usuarioService.salvaToken(authToken);
      })
    );
  }
}
