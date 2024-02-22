import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from '../../services/servicios.service';
import { IServicio } from '../../interface/iservicio.interface';

@Component({
  selector: 'app-servicio-view',
  standalone: true,
  imports: [],
  templateUrl: './servicio-view.component.html',
  styleUrl: './servicio-view.component.css'
})
export class ServicioViewComponent {
  //inyectar elemento de rutas que permite capturar parte variable de la ruta ActivateRoute, es un injectable
  activatedRoute = inject(ActivatedRoute);
  serviciosService = inject(ServiciosService);
  unServicio!: IServicio;


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let miUrl = params.url
      let response = this.serviciosService.getByUrl(miUrl)
      if (response !== undefined) {
        this.unServicio = response;
        console.log(this.unServicio)

      }
    })
  }


}
