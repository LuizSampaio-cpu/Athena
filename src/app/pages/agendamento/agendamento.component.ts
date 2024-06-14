import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-agendamento',
  standalone: true,
  imports: [CalendarModule, FormsModule],
  templateUrl: './agendamento.component.html',
  styleUrl: './agendamento.component.scss'
})
export class AgendamentoComponent {



  constructor(private router: Router) {

  }


  date3: Date | undefined;



  ngOnInit(){

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



}

