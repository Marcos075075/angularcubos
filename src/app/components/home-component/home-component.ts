import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/cubo';
import { ServiceCubos } from '../../services/service.cubos';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent implements OnInit {
  public cubos!: Cubo[];
  public mensaje!: string;

  constructor(
    private _serviceCubos: ServiceCubos,
    private _cdr: ChangeDetectorRef,
  ) {}

  seleccionarFavoritoPadre(event: string): void {
    console.log('Leyendo padre');
    this.mensaje = 'Su cubo favorito es: ' + event;
  }

  async ngOnInit(): Promise<void> {
    this.cubos = await this._serviceCubos.getCubos();
    this._cdr.detectChanges();
  }
}
