import { Injectable } from '@angular/core';
import { IServicio } from '../interface/iservicio.interface';
import { SERVICIOS } from '../db/servicios.db';


@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private arrServicios: IServicio[] = SERVICIOS;
  constructor() { }
  getAll(): IServicio[]{
    return this.arrServicios;
  }

  getByUrl(url: string): IServicio | undefined {
    return this.arrServicios.find(servicio => servicio.url === url)
  }


}
