import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceLogin } from '../../services/service.login';
import { Router } from '@angular/router';
import { FullUser } from '../../models/fulluser';

@Component({
  selector: 'app-registro-component',
  standalone: false,
  styleUrl: './registro-component.css',
  templateUrl: './registro-component.html',
})
export class RegistroComponent {
  @ViewChild('cajanombre') cajanombre!: ElementRef;
  @ViewChild('cajaemail') cajaemail!: ElementRef;
  @ViewChild('cajapass') cajapass!: ElementRef;

  constructor(
    private _serviceLogin: ServiceLogin,
    private _router: Router,
  ) {}

  async registroAsync(): Promise<void> {
    const nombre = this.cajanombre.nativeElement.value;
    const email = this.cajaemail.nativeElement.value;
    const pass = this.cajapass.nativeElement.value;
    const user = new FullUser(0, nombre, email, pass);
    await this._serviceLogin.registroAsync(user);
    this._router.navigate(['/login']);
  }
}
