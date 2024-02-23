import { Component, inject } from '@angular/core';
import { ProductoCardComponent } from '../../components/producto-card/producto-card.component';
import { ProductoViewComponent } from '../producto-view/producto-view.component';
import { IProducto } from '../../interface/iproducto.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [ProductoCardComponent, ProductoViewComponent],

  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos: IProducto[] = [];
  productosService = inject(ProductosService);

  ngOnInit(): void {
    this.productos = this.productosService.GetAllProducts()
  }
}
