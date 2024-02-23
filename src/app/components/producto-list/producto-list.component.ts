import { Component, Input } from '@angular/core';
import { IProducto } from '../../interface/iproducto.interface';

@Component({
  selector: 'app-producto-list',
  standalone: true,
  imports: [],
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css'
})
export class ProductoListComponent {
  @Input() miProducto!: IProducto;

}
