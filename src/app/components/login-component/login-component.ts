import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceLogin } from '../../services/service.login';
import { ServiceAuthLogin } from '../../services/service.auth.login';
import { User } from '../../models/user';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  public mensaje!: string;
  @ViewChild('cajauser') cajauser!: ElementRef;
  @ViewChild('cajapass') cajapass!: ElementRef;

  constructor(
    private _serviceLogin: ServiceLogin,
    private _serviceAuthLogin: ServiceAuthLogin,
    private _cdr: ChangeDetectorRef
  ) {}

  async loginAsync(): Promise<void> {
    const user = this.cajauser.nativeElement.value;
    const pass = this.cajapass.nativeElement.value;
    const login = new User(user, pass);
    let respuesta = await this._serviceLogin.loginAsync(login);
    this.mensaje = "Has iniciado sesión correctamente";
    await this._serviceAuthLogin.loginAuthAsync(respuesta.response);
    this._cdr.detectChanges();
  }
}
