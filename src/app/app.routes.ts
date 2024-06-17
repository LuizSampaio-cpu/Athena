import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { ChamadoComponent } from './components/chamado/chamado.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

export const routes: Routes = [
  {
    path: "login",
    component:LoginComponent
  },
  {
    path: "main",
    component:MainComponent
  },
  {
    path: "novo",
    component:ChamadoComponent
  },
  {
    path: "agendamento",
    component: AgendamentoComponent
  },
  {
    path: "usuario",
    component: UsuarioComponent
  }
];
