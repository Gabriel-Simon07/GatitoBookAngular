<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent {
  user$ = this.usuarioService.retornaUsuario();

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
    ) {}

  logout() {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }
}
=======
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

// @Component({
//   selector: 'app-cabecalho',
//   templateUrl: './cabecalho.component.html',
//   styleUrls: ['./cabecalho.component.css']
// })
// export class CabecalhoComponent {

//   user$ = this.usuarioService.retornaUsuario();

//   constructor(private usuarioService: UsuarioService, private router: Router) { }

//   logout() {
//     this.usuarioService.logout();
//     this.router.navigate(['']);
//   }

// }
>>>>>>> 4b00c02ff0c2545d3a47958a11a5efdda8a7b91b
