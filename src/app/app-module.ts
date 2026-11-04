import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import { MarcasComponent } from './components/marcas-component/marcas-component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ServiceCubos } from './services/service.cubos';
import { HijoCubosComponent } from './components/hijo-cubos-component/hijo-cubos-component';
import { ServiceLogin } from './services/service.login';
import { ServiceAuthLogin } from './services/service.auth.login';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth-guard';
import { authTokenInterceptor } from './interceptors/auth-token-interceptor-interceptor';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { VerComprasComponent } from './components/ver-compras-component/ver-compras-component';
import { ComprarComponent } from './components/comprar-component/comprar-component';
import { RegistroComponent } from './components/registro-component/registro-component';
import { provideToastService } from 'ngx-yet-another-toast-library';
import { ErrorComponent } from './error-component/error-component';
import { errorInterceptor } from './interceptors/error-interceptor-interceptor';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    MarcasComponent,
    HijoCubosComponent,
    PerfilComponent,
    VerComprasComponent,
    ComprarComponent,
    RegistroComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([authTokenInterceptor, errorInterceptor])),
    provideToastService(),
    ServiceCubos,
    ServiceLogin,
    AuthGuard,
  ],
  bootstrap: [App],
})
export class AppModule {}
