import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './minusculo.validatitor';
import { NovoUsuario } from './novo-usuario';
import { UsuarioExiste } from './usuario-existe.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioJaExistenteService: UsuarioExiste
    // private novoUsuarioService: NovoUsuario
    ) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [minusculoValidator], [this.usuarioJaExistenteService.usuarioJaExiste()]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      password: ['']
    });
  }

  cadastrar() {
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    console.log(novoUsuario);
  }
}
