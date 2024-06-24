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
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {
  usuarios!: Usuario[];
  UsuarioEscolhido?: Usuario;

  constructor(private router: Router) {}

  ngOnInit() {
    this.UsuarioEscolhido = {
      nome: 'Luiz Sampaio Horta',
      nomeExibicao: 'Luiz Horta',
      telefoneFixo: '99 9999-9999',
      TelefoneMovel: '99 9999-9999',
      Sala: 1111,
      Regional: 'PRT17',
      Unidade: 'Sede',
      Cargo: ''
    };
  }

  navigateNext() {
    // Lógica para atualizar os dados do usuário se necessário
    // Exemplo: salvar os dados atualizados em um serviço ou backend
    console.log('Dados do usuário atualizados:', this.UsuarioEscolhido);

    // Navegação para a próxima página
    this.router.navigate(['/main']); // Altere '/proxima-pagina' para a rota desejada
  }

  navigateNovo() {
    this.router.navigate(['/novo']);
  }

  navigateMain() {
    this.router.navigate(['/main']);
  }

  navigateUsuario() {
    this.router.navigate(['/usuario']);
  }

  navigateAcompanhamento() {
    this.router.navigate(['/acompanhamento'])
    }
}
