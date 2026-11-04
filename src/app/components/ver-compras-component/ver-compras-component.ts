import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceLogin } from '../../services/service.login';
import { Compras } from '../../models/compras';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

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

  generarPDF(): void {
    let document: jsPDF = new jsPDF();
    document.setFontSize(20);
    document.text("Mi documento de compras", 10, 10);
    document.setFontSize(12);
    const headers = [["ID Cubo", "ID Pedido", "ID Usuario", "Fecha Pedido"]];
    const data = this.compras.map(compra => [compra.idCubo, compra.idPedido, compra.idUsuario, compra.fechaPedido]);
    autoTable(document, {
      head: headers,
      body: data,
      startY: 20,
    });
    document.save("compras.pdf");
  }

  async ngOnInit(): Promise<void> {
    this.compras = await this._ServiceLogin.getComprasAsync();
    this._cdr.detectChanges();
  }
}
