import { Component, OnInit } from '@angular/core';
import { DatosusuService } from "../../../servicios/datosusu.service";
import { MenuController } from '@ionic/angular';
import { EditarComponent } from "../../../componentes/editar/editar.component";
import { ModalController } from "@ionic/angular";


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
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {
  public datos: any = [];
  filtrartext= '';

  constructor(
    private menu: MenuController,
    private modal : ModalController,
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

  abriredicion(items){
    this.modal.create({
      component: EditarComponent,
      componentProps: {
        id: items.id,
        nombre: items.nombre,
        apellido: items.apellido,
        carrera: items.carrera,
        documento: items.documento,
        rango: items.rango
      }
    }).then((modal) => modal.present());
  }
}
