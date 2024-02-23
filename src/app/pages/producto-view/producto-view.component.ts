import { Component, inject } from '@angular/core';
import { IProducto } from '../../interface/iproducto.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto-view',
  standalone: true,
  imports: [],
  templateUrl: './producto-view.component.html',
  styleUrl: './producto-view.component.css'
})
export class ProductoViewComponent {
  //inyectar elemento de rutas que permite capturar parte variable de la ruta ActivateRoute, es un injectable
  activatedRoute = inject(ActivatedRoute);
  productosService = inject(ProductosService);
  unProducto!: IProducto;


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let myId = params.id
      let response = this.productosService.getByUrl(myId)
      if (response !== undefined) {
        this.unProducto = response;
        console.log(this.unProducto)

      }
    })
  }

}
