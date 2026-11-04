import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent implements OnInit {
  public marcas!: string[];

  constructor(
    private _cdr: ChangeDetectorRef,
    private _serviceCubos: ServiceCubos
  ) {}

  async ngOnInit(): Promise<void> {
    this.marcas = await this._serviceCubos.getMarcas();
    this._cdr.detectChanges();
  }
}
