import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Usuario } from 'src/app/autenticacao/usuario/usuario';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { AnimaisService } from '../animais.service';
import { Animais } from '../animal';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {

  animais$ !: Observable<Animais>;

  constructor(
    private usuarioService: UsuarioService,
    private animaisService: AnimaisService
    ) { }

  ngOnInit(): void {
    this.animais$ = this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.animaisService.listaUsuario(userName);
      })
    )
  }

}
