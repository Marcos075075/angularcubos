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

@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    MarcasComponent,
    HijoCubosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([authTokenInterceptor])),
    ServiceCubos,
    ServiceLogin,
    ServiceAuthLogin,
    AuthGuard
  ],
  bootstrap: [App],
})
export class AppModule {}
