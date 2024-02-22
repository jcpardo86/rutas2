import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  estadoError:boolean = false;
  router = inject(Router)

  validar($event:any): void{
    if($event.target.value ===""){
      this.estadoError=true;
    }
    
  }


  getSuscribe(suscribeForm: any): void{
    this.estadoError = false;
    
    if(suscribeForm.value.email != ""){
        this.router.navigate(['/servicios'])
      //redirijo a la pagina de servicios
      //this.router.navigate(['/servicios'])
      //this.router.navigateByUrl('/servicios')
      //si quiero salir de fuera de mi aplicacion
      //window.location.href = 'http://www.google.com'
      }else{
      this.estadoError = true;
      }
    }
}
