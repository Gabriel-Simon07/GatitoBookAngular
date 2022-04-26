import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './minusculo.validatitor';
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
    ) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required, Validators.minLength(4)]],
      fullName: [''],
      password: ['']
    }
    );
  }
}
