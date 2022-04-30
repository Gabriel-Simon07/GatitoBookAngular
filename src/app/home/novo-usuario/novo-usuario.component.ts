import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './minusculo.validatitor';
import { UsuarioExiste } from './usuario-existe.service';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';

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
    ) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [this.usuarioJaExistenteService.usuarioJaExite()], [minusculoValidator]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      password: ['']
    }, {
      validators: [usuarioSenhaIguaisValidator]
    });
  }
}
