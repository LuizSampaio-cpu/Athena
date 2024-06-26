import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { CommonModule } from '@angular/common';

interface Chamado {
  codigo: string;
  abertoHa: string;
  situacao: string;
  ultimaAcao: string;
  autor: string;
  titulo: string;
}

@Component({
  selector: 'app-acompanhamento',
  standalone: true,
  imports: [InputTextModule, FormsModule, TableModule, PanelModule, CommonModule],
  templateUrl: './acompanhamento.component.html',
  styleUrls: ['./acompanhamento.component.scss']
})
export class AcompanhamentoComponent {
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
  ];

  filteredChamados: Chamado[] = [];
  selectedChamado?: Chamado;
  expandedChamado?: Chamado;

  constructor(private router: Router) {
    // Filter the chamados array to include only those with 'Aberto' or 'Em andamento' status
    this.filteredChamados = this.Chamados.filter(chamado =>
      chamado.situacao === 'Aberto' || chamado.situacao === 'Em andamento'
    );
  }

  navigateNovo() {
    this.router.navigate(['/novo']);
  }

  navigateMain() {
    this.router.navigate(['/main']);
  }

  navigateAcompanhamento() {
    this.router.navigate(['/acompanhamento']);
  }

  navigateUsuario() {
    this.router.navigate(['/usuario']);
  }

  onRowSelect(event: any) {
    console.log('Row selected:', event.data);
    this.selectedChamado = event.data;
  }

  onRowUnselect(event: any) {
    console.log('Row unselected:', event.data);
    this.selectedChamado = undefined;
  }

  toggleDetails(chamado: Chamado) {
    if (this.expandedChamado === chamado) {
      this.expandedChamado = undefined;
    } else {
      this.expandedChamado = chamado;
    }
  }
}
