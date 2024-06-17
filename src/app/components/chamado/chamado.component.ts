import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastrModule } from 'ngx-toastr';

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
  imports: [DropdownModule, FormsModule, CheckboxModule, ToastrModule],
  templateUrl: './chamado.component.html',
  styleUrl: './chamado.component.scss'
})
export class ChamadoComponent {


  constructor(private router: Router) {

  }
  sim: boolean = false;
  nao: boolean = false;

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
  navigateAgendamento(result: boolean){
    if( result == true) {
      this.router.navigate(['/agendamento'])
    }
    else {
      this.router.navigate(['/main'])
    }


  }

  onCheckboxChange(selectedCheckbox: string){
    if (selectedCheckbox === 'sim') {
      this.nao = !this.sim;
      return true;
    } else if (selectedCheckbox === 'nao') {
      this.sim = !this.nao;

    }
    return false;
  }

  navigateNext() {
    if (this.sim) {
      this.router.navigate(['/agendamento']);
    } else if (this.nao) {
      this.router.navigate(['/main']);

    }
  }

  navigateUsuario() {
    this.router.navigate(['/usuario'])
    }

}
