import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import { MarcasComponent } from './components/marcas-component/marcas-component';
import { VerComprasComponent } from './components/ver-compras-component/ver-compras-component';
import { AuthGuard } from './guards/auth-guard';
import { ComprarComponent } from './components/comprar-component/comprar-component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'marcas/:marca', component: MarcasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'compras', component: VerComprasComponent, canActivate: [AuthGuard] },
  { path: 'comprar', component: ComprarComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
