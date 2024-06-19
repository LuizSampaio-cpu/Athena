import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

interface Usuario {
  nome: String;
  nomeExibicao: String;
  telefoneFixo: String;
  TelefoneMovel: String;
  Sala: Number;
  Regional: String;
  Unidade: String;
  Cargo: String;
}

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [InputTextModule, FormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent {
navigateNext() {
throw new Error('Method not implemented.');
}
  constructor(private router: Router) {

  }

  usuarios !: Usuario[]

  UsuarioEscolhido ?: Usuario

  ngOnInit(){
    this.UsuarioEscolhido =
      {nome: 'Luiz Sampaio Horta',
        nomeExibicao: 'Luiz Horta',
        telefoneFixo: '99 9999-9999',
        TelefoneMovel: '99 9999-9999',
        Sala: 1111, Regional: 'PRT17',
        Unidade: 'Sede',
        Cargo: "" }


  }

  navigateNovo() {
    this.router.navigate(['/novo'])
  }
  navigateMain() {
    this.router.navigate(['/main'])
  }
  navigateUsuario() {
    this.router.navigate(['/usuario'])
    }
}
