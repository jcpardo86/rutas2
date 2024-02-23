import { Component, Input, NgModule } from '@angular/core';
import { IProducto } from '../../interface/iproducto.interface';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './producto-card.component.html',
  styleUrl: './producto-card.component.css'
})
export class ProductoCardComponent {
  @Input() miProducto!: IProducto;

}
