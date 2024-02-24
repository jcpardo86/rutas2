import { Component, NgModule, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { IProducto } from '../../interface/iproducto.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicio-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-view.component.html',
  styleUrl: './producto-view.component.css'
})
export class ProductoViewComponent {
  activatedRoute = inject(ActivatedRoute);
  productosService = inject(ProductosService);
  unProducto?: IProducto;


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let miId = params.id
      let response = this.productosService.getProductById(miId)
      if (response !== undefined) {
        this.unProducto = response;
        console.log(this.unProducto)

      }
    })
  }


}
