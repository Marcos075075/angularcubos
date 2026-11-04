import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FullUser } from '../../models/fulluser';
import { ServiceLogin } from '../../services/service.login';

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  styleUrl: './perfil-component.css',
  templateUrl: './perfil-component.html',
})
export class PerfilComponent implements OnInit{
  public user!: FullUser;

  constructor(
    private _serviceLogin: ServiceLogin,
    private _cdr: ChangeDetectorRef
  ) {}

  async ngOnInit(): Promise<void> {
    this.user = await this._serviceLogin.getPerfilAsync();
    this._cdr.detectChanges();
  }
}
