import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { AdminsTrabajadoresComponent } from './views/admins-trabajadores/admins-trabajadores.component';
import { EmpresasTransporteComponent } from './views/empresas-transporte/empresas-transporte.component';
import { EnviosComponent } from './views/envios/envios.component';
import { TiposPaquetesComponent } from './views/tipos-paquetes/tipos-paquetes.component';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admins_trabajadores', component: AdminsTrabajadoresComponent },
  { path: 'empresas_transporte', component: EmpresasTransporteComponent },
  { path: 'envios', component: EnviosComponent },
  { path: 'tipos_paquetes', component: TiposPaquetesComponent },
  { path: 'home', component: HomeComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
