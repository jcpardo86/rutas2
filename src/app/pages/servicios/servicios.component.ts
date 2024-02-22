import { Component, Inject, inject } from '@angular/core';
import { IServicio } from '../../interface/iservicio.interface';
import { ServiciosService } from '../../services/servicios.service';
import { ServicioCardComponent } from '../../components/servicio-card/servicio-card.component';
import { ServicioViewComponent } from '../servicio-view/servicio-view.component';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [ServicioCardComponent, ServicioViewComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  servicios: IServicio[] = [];
  serviciosService = inject(ServiciosService);

  ngOnInit(): void {
    this.servicios = this.serviciosService.getAll()
  }
}
