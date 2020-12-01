import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormUsuariosComponent } from './components/form-usuarios/form-usuarios.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { PedidoComponent } from './components/pedido/pedido.component';


const routes: Routes = [
  { path: '', component: FormUsuariosComponent},
  { path: 'principal', component: PrincipalComponent },
  { path: 'pedido', component: PedidoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
