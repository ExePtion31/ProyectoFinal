import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {

  nombre: string;
  apellido: string;
  carrera :string;
  documento: number;
  rango: string;
  id: string;

  recibenombre: string;
  recibeapellido: string;
  recibecarrera: string;
  recibedocumento: number;
  reciberango: string;


  constructor(
    private NavParams: NavParams,
    private Router: Router,
    private modal: ModalController
  ) { }

  ngOnInit() {
    this.id = this.NavParams.get('id');
    this.recibenombre = this.NavParams.get('nombre');
    this.recibeapellido = this.NavParams.get('apellido');
    this.recibecarrera = this.NavParams.get('carrera');
    this.recibedocumento = this.NavParams.get('documento');
    this.reciberango = this.NavParams.get('rango');
    
  }

  cerrar(){
    this.modal.dismiss();
  }

  modificar(){

    if(this.nombre== null){
      this.nombre = this.recibenombre;
    }else if(this.apellido == null){
      this.apellido = this.recibeapellido;
    }else if(this.carrera == null){
      this.carrera = this.recibecarrera;
    }else if(this.documento == null){
      this.documento = this.recibedocumento;
    }else if(this.rango == null){
      this.rango = this.reciberango;
    }else{
      this.Router.navigate(['cargamodificar', this.id, this.nombre, this.apellido, this.carrera, this.documento, this.rango]);
      this.modal.dismiss();
    }
  }
}
