import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table'
import { MenuModule } from 'primeng/menu'
import {PanelMenuModule} from 'primeng/panelmenu'
import { CommonModule } from '@angular/common';
import { PrimeIcons } from 'primeng/api';
import { Router, RouterModule } from '@angular/router';

interface Chamado {
  codigo: string;
  abertoHa: string;
  situacao: string;
  ultimaAcao: string;
  autor: string;
  titulo: string;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, PaginatorModule, TableModule, ButtonModule, MenuModule, PanelMenuModule, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  constructor(private router: Router) {

  }


  Chamados: Chamado[] = [
    {
      codigo: '001',
      abertoHa: '2 dias',
      situacao: 'Aberto',
      ultimaAcao: 'Atualizado ontem',
      autor: 'João Silva',
      titulo: 'Problema com login'
    },
    {
      codigo: '002',
      abertoHa: '1 dia',
      situacao: 'Em andamento',
      ultimaAcao: 'Atualizado hoje',
      autor: 'Maria Oliveira',
      titulo: 'Erro no sistema de pagamentos'
    },
    {
      codigo: '003',
      abertoHa: '3 dias',
      situacao: 'Fechado',
      ultimaAcao: 'Fechado anteontem',
      autor: 'Carlos Santos',
      titulo: 'Solicitação de nova funcionalidade'
    },
    {
      codigo: '004',
      abertoHa: '4 dias',
      situacao: 'Aberto',
      ultimaAcao: 'Atualizado há 3 dias',
      autor: 'Ana Costa',
      titulo: 'Dúvida sobre relatório'
    },
    {
      codigo: '005',
      abertoHa: '5 dias',
      situacao: 'Fechado',
      ultimaAcao: 'Fechado há 2 dias',
      autor: 'Pedro Pereira',
      titulo: 'Problema com impressão'
    },
    {
      codigo: '006',
      abertoHa: '6 dias',
      situacao: 'Em andamento',
      ultimaAcao: 'Atualizado há 1 dia',
      autor: 'Lucia Fernandes',
      titulo: 'Erro ao enviar e-mail'
    }

  ]

  navigateNovo() {
    this.router.navigate(['/novo'])
  }
  navigateMain() {
    this.router.navigate(['/main'])
  }
  navigateUsuario() {
    this.router.navigate(['/usuario'])
    }
  navigateAcompanhamento() {
    this.router.navigate(['/acompanhamento'])
    }

}
