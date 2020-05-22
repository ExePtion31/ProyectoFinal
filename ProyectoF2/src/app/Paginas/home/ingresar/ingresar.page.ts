import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../servicios/auth.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {


  email: string;
  password: string;

  constructor(
    public Router: Router,
    public authservices: AuthService,
    private menu: MenuController

  ) { }

  ngOnInit() {
    this.menuUsuario();
  }

  menuUsuario() {
    this.menu.enable(true, 'MUsuario');
  }

  onLogin(){
    this.authservices.login(this.email, this.password).then( res =>{
      
    }).catch(err => alert('Los datos son incorrectos o el usuario no ha sido registrado.'));
  }
}
