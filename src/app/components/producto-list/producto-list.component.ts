import { Component, Input, NgModule, OnInit } from '@angular/core';
import { IProducto } from '../../interface/iproducto.interface';
import { ProductosService } from '../../services/productos.service';
import { ProductoCardComponent } from '../producto-card/producto-card.component';
import { CommonModule } from '@angular/common';
import { ProductosComponent,  } from '../../pages/productos/productos.component';

@Component({
  selector: 'app-producto-list',
  standalone: true,
  imports: [ProductoCardComponent,CommonModule, ProductosComponent],
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css'
})
export class ProductoListComponent implements OnInit {
  @Input() productoId!: number;
  producto?: IProducto;

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.producto = this.productosService.getProductById(this.productoId);

    if (!this.producto) {
      console.error('Producto no encontrado');
    }
  }

}
