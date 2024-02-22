import { Injectable } from '@angular/core';
import { IServicio } from '../interface/iservicio.interface';
import { SERVICIOS } from '../db/servicios.db';
import { IProducto } from '../interface/iproducto.interface';
import { PRODUCTOS } from '../db/productos.db';


@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private arrServicios: IServicio[] = SERVICIOS;
  private arrProductos: IProducto[] = PRODUCTOS;

  getAll(): IServicio[]{
    return this.arrServicios;
  }

  getByUrl(url: string): IServicio | undefined {
    return this.arrServicios.find(servicio => servicio.url === url)
  }

  GetAllProducts():IProducto[]{
    return this.arrProductos;
  }
}
