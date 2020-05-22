import { AngularFirestore } from '@angular/fire/firestore';
import { DatosusuService } from "../../servicios/datosusu.service";
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../../servicios/auth.service';

export interface usuarios {
  id: string;
  nombre: string;
  apellido: string;
  contraseña: string;
  correo: string;
  rango: string;
}

@Component({
  selector: 'app-carga',
  templateUrl: './carga.page.html',
  styleUrls: ['./carga.page.scss'],
})

export class CargaPage implements OnInit {

  public datosusu : any = [];
  public IDuser = "";

  constructor(
    public datos: DatosusuService,
    public  activaterRouter:ActivatedRoute,
    public db: AngularFirestore,
    public AuthService: AuthService,
    private menu: MenuController,
    public Router:Router
  ) { }

  ngOnInit() {
    this.IDuser= this.activaterRouter.snapshot.paramMap.get('IDuser');

    this.datos.getOneuser(this.IDuser).subscribe(usuario =>{
     this.datosusu.push(usuario);
     this.datosusu.forEach(element => {
       
      if(element.rango == 'Administrador'){
        var Nombre = element.nombre;
        var Apellido = element.apellido;
        var Correo = element.correo;
        var Rango = element.rango;

        this.menu.enable(true, 'MAdmin');
        this.Router.navigate(['administrador']);
  
       }else if (element.rango == "Estudiante"){
        var Nombre = element.nombre;
        var Apellido = element.apellido;
        var Correo = element.correo;
        var Documento = element.documento;
        var Carrera = element.carrera;
        var Rango = element.rango;

        this.menu.enable(true, 'MEstudiante');
        this.Router.navigate(['estudiante', Nombre, Apellido, Correo, Documento, Carrera, Rango]); 

       }
     })
   });
  }

}
