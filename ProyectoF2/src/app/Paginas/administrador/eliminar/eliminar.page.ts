import { Component, OnInit } from '@angular/core';
import { DatosusuService } from "../../../servicios/datosusu.service";
import { MenuController } from '@ionic/angular';
import { Router } from "@angular/router";

export interface datosusu{
  nombre: string;
  apellido: string;
  correo: string;
  carrera: string;
  documento: number;
  rango: string;
  id: string;
  password: string;
}

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {
  id: string;
  filtrartext= '';
  public datos: any = [];
  constructor(
    private menu: MenuController,
    private Router: Router,
    public DatosusuService: DatosusuService
  ) { }

  ngOnInit() {
    
    this.DatosusuService.getAlluser().subscribe(datos =>{
      datos.map(dato => {
        
        const data : datosusu = dato.payload.doc.data() as datosusu;
        data.id = dato.payload.doc.id;
        this.datos.push(data);
      })
    })

    this.menu.enable(true, 'MAdmin');
  }

  eliminarusu(ID){
   this.id = ID;
   const respuesta = confirm('¿Seguro que quiere eliminar el usuario?')
      if(respuesta){
        this.Router.navigate(['cargaeliminar', this.id])
      }   
  }
}
