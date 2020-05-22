import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})

export class AdministradorPage implements OnInit {

  nombre: string;
  apellido: string;
  carrera: string;
  documento: number;
  email: string;
  rango: string;
  password: string;


  constructor(
    private menu: MenuController,
    private Router:Router,
    public ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menu.enable(true, 'MAdmin');
  }


  carga(){
    if(this.nombre == null){
      alert('Complete el campo NOMBRE.');
    }else if(this.apellido == null){
      alert('Complete el campo APELLIDO.');
    }else if(this.carrera == null){
      alert('Complete el campo CARRERA.');
    }else if(this.documento == null){
      alert('Complete el campo DOCUMENTO.');
    }else if(this.email == null){
      alert('Complete el campo CORREO.');
    }else if(this.password == null){
      alert('Complete el campo CONTRASEÑA.');
    }else if(this.rango == null){
      alert('Complete el campo CARGO');
    }else{
      this.Router.navigate(['cargaadmin',this.nombre, this.apellido, this.carrera, this.documento, this.email, this.password, this.rango]);
    }
  }

  
}
