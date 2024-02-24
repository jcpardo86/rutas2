import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { Error404Component } from './pages/error404/error404.component';
import { ServicioViewComponent } from './pages/servicio-view/servicio-view.component';
import { ProductoViewComponent } from './pages/producto-view/producto-view.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';

export const routes: Routes = [
    { path: '', pathMatch:'full', redirectTo: 'home' },
    { path: 'home', component:HomeComponent},
    { path: 'servicios', component:ServiciosComponent},
    { path: 'contacto', component:ContactoComponent},
    { path: 'servicio/:url', component:ServicioViewComponent},
    { path: 'productos', component:ProductosComponent},
    { path: 'producto/:id', component:ProductoViewComponent},
    { path: 'producto-constock', component: ProductoListComponent},
    { path: '**', redirectTo: 'home' } // Redirección a home si no se encuentra ninguna

];
