import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import { MarcasComponent } from './components/marcas-component/marcas-component';
import { provideHttpClient } from '@angular/common/http';
import { ServiceCubos } from './services/service.cubos';
import { HijoCubosComponent } from './components/hijo-cubos-component/hijo-cubos-component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    MarcasComponent,
    HijoCubosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServiceCubos],
  bootstrap: [App],
})
export class AppModule {}
