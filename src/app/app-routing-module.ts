import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import { MarcasComponent } from './components/marcas-component/marcas-component';
import { VerComprasComponent } from './components/ver-compras-component/ver-compras-component';
import { AuthGuard } from './guards/auth-guard';
import { ComprarComponent } from './components/comprar-component/comprar-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { RegistroComponent } from './components/registro-component/registro-component';
import { ErrorComponent } from './error-component/error-component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'marcas/:marca', component: MarcasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'compras', component: VerComprasComponent, canActivate: [AuthGuard] },
  { path: 'comprar', component: ComprarComponent, canActivate: [AuthGuard] },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
