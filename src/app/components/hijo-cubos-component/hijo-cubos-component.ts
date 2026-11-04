import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Cubo } from '../../models/cubo';

@Component({
  selector: 'app-hijo-cubos-component',
  standalone: false,
  styleUrl: './hijo-cubos-component.css',
  templateUrl: './hijo-cubos-component.html',
})
export class HijoCubosComponent {

  @Input() cubo!: Cubo;
  @Output() seleccionarFavoritoPadre: EventEmitter<any> = new EventEmitter();

  mostrarFavorito(): void{
    this.seleccionarFavoritoPadre.emit(this.cubo.nombre);
  }
}
