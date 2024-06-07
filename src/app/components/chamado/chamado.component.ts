import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chamado',
  standalone: true,
  imports: [],
  templateUrl: './chamado.component.html',
  styleUrl: './chamado.component.scss'
})
export class ChamadoComponent {

  constructor(private router: Router) {

  }

  navigateNovo() {
    this.router.navigate(['/novo'])
  }
  navigateMain() {
    this.router.navigate(['/main'])
    }

}
