import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import { ServiceAuthLogin } from '../../services/service.auth.login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent implements OnInit {
  private _serviceAuthLogin: ServiceAuthLogin = inject(ServiceAuthLogin);

  public marcas!: string[];
  public user = this._serviceAuthLogin.user;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _serviceCubos: ServiceCubos,
    private _router: Router
  ) {}

  async logOutAsync(): Promise<void> {
    await this._serviceAuthLogin.logoutAuthAsync();
    this._router.navigate(['/login']);
    this._cdr.detectChanges();
  }

  async ngOnInit(): Promise<void> {
    this.marcas = await this._serviceCubos.getMarcas();
    this._cdr.detectChanges();
  }
}
