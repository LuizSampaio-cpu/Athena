import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table'
import { MenuModule } from 'primeng/menu'
import {PanelMenuModule} from 'primeng/panelmenu'
import { CommonModule } from '@angular/common';
import { PrimeIcons } from 'primeng/api';
import { Router, RouterModule } from '@angular/router';

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


  Chamados = [
      { codigo: '001', abertoHa: '3 dias', situacao: 'encerrado', ultimaAcao: 'Finalizado'},
      { codigo: '002', abertoHa: '7 dias', situacao: 'Em andamento', ultimaAcao: 'Em análise' },
      { codigo: '003', abertoHa: '10 dias', situacao: 'Pendente', ultimaAcao: 'Aguardando resposta' },
      { codigo: '004', abertoHa: '1 dia', situacao: 'Novo', ultimaAcao: 'Aberto' },
      { codigo: '005', abertoHa: '4 dias', situacao: 'Concluído', ultimaAcao: 'Documentação recebida' },
      { codigo: '006', abertoHa: '2 dias', situacao: 'Em andamento', ultimaAcao: 'Revisão técnica' },
      { codigo: '007', abertoHa: '5 dias', situacao: 'Pendente', ultimaAcao: 'Aguardando aprovação' },
      { codigo: '008', abertoHa: '8 dias', situacao: 'Encerrado', ultimaAcao: 'Finalizado' },
      { codigo: '009', abertoHa: '6 dias', situacao: 'Em andamento', ultimaAcao: 'Trabalhando no problema' },
      { codigo: '010', abertoHa: '12 dias', situacao: 'Pendente', ultimaAcao: 'Aguardando cliente' },
      { codigo: '011', abertoHa: '9 dias', situacao: 'Concluído', ultimaAcao: 'Problema resolvido' },
      { codigo: '012', abertoHa: '3 dias', situacao: 'Em andamento', ultimaAcao: 'Teste em progresso' },
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

}
