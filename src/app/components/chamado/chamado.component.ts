import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

interface Setor {
  codigo: number;
  nome: String;
}
interface Servico {
  codigo: number;
  nome: String;
}

@Component({
  selector: 'app-chamado',
  standalone: true,
  imports: [DropdownModule, FormsModule],
  templateUrl: './chamado.component.html',
  styleUrl: './chamado.component.scss'
})
export class ChamadoComponent {


  constructor(private router: Router) {

  }

  setores !: Setor[];
  servicos !: Servico[];

  SetorEscolhido ?: Setor;
  ServicoEscolhido ?: Servico;

  ngOnInit(){
    this.setores = [
      {codigo: 1, nome: 'Limpeza'},
      {codigo: 2, nome: 'Copa'}
    ];

    this.servicos = [
      {codigo: 1, nome: 'Limpeza de gabinete'},
      {codigo: 2, nome: 'Limpeza da sala de reunião'},
      {codigo: 3, nome: 'Disponibilizar café'},
      {codigo: 4, nome: 'Retirada de lixo'},
    ]
  }

  navigateNovo() {
    this.router.navigate(['/novo'])
  }
  navigateMain() {
    this.router.navigate(['/main'])
    }

}
