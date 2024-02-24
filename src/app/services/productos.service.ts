import { Injectable } from '@angular/core';
import { IProducto } from '../interface/iproducto.interface';
import { PRODUCTOS } from '../db/productos.db';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private arrProductos: IProducto[] = PRODUCTOS;
  constructor() { }


  GetAllProducts():IProducto[]{
    return this.arrProductos;
  }

  getProductById(id: number): IProducto | undefined {
    return this.arrProductos.find(producto => producto.id === id)
  }
}
