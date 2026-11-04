import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import { Cubo } from '../../models/cubo';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-marcas-component',
  standalone: false,
  styleUrl: './marcas-component.css',
  templateUrl: './marcas-component.html',
})
export class MarcasComponent implements OnInit {
  public cubos!: Cubo[];
  public marca!: string;

  constructor(
    private _serviceCubos: ServiceCubos,
    private _cdr: ChangeDetectorRef,
    private _activatedRoute: ActivatedRoute,
  ) {}

  async ngOnInit(): Promise<void> {
    this._activatedRoute.params.subscribe(async(params: Params) => {
      this.marca = params['marca'];
      this.cubos = await this._serviceCubos.getMarcasCubo(this.marca);
      this._cdr.detectChanges();
    });
  }
}
