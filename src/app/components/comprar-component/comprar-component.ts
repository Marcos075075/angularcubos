import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceLogin } from '../../services/service.login';
import { Router } from '@angular/router';
import { ServiceCubos } from '../../services/service.cubos';
import { Cubo } from '../../models/cubo';

@Component({
  selector: 'app-comprar-component',
  standalone: false,
  styleUrl: './comprar-component.css',
  templateUrl: './comprar-component.html',
})
export class ComprarComponent implements OnInit {
  public cubos!: Cubo[];
  @ViewChild('cajacompra') cajacompra!: ElementRef;

  constructor(
    private _serviceLogin: ServiceLogin,
    private _router: Router,
    private _cdr: ChangeDetectorRef,
    private _serviceCubos: ServiceCubos
  ) {}

  async comprarAsync(): Promise<void> {
    const compra = this.cajacompra.nativeElement.value;
    await this._serviceLogin.insterCompraAsync(compra);
    this._router.navigate(['/compras']);
  }


  async ngOnInit(): Promise<void> {
    this.cubos = await this._serviceCubos.getCubos();
    this._cdr.detectChanges();
  }
}
