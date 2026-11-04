import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceLogin } from '../../services/service.login';
import { Compras } from '../../models/compras';

@Component({
  selector: 'app-ver-compras-component',
  standalone: false,
  styleUrl: './ver-compras-component.css',
  templateUrl: './ver-compras-component.html',
})
export class VerComprasComponent implements OnInit{
  public compras!: Compras[];

  constructor(
    private _ServiceLogin: ServiceLogin,
    private _cdr: ChangeDetectorRef,
  ){}

  async ngOnInit(): Promise<void> {
    this.compras = await this._ServiceLogin.getComprasAsync();
    this._cdr.detectChanges();
  }
}
