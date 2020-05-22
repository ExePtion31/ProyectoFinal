import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../servicios/auth.service";
import { Router } from "@angular/router";
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {
  nombre: string;
  apellido: string;
  carrera :string;
  email: string;
  documento: number;
  password: string;



  constructor(
    private AuthService: AuthService,
    private Router: Router,
    private menu: MenuController
  ) { }

  ngOnInit() {
    this.menuUsuario();
  }

  menuUsuario() {
    this.menu.enable(true, 'MUsuario');
  }

  register(){
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
    }else{
      this.AuthService.register(this.nombre, this.apellido, this.carrera, this.documento ,this.email, this.password).then(() =>{
      
      }).catch(err => alert("Este correo ya ha sido registrado."));
    }
  }
}
