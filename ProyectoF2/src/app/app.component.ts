import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';
import { AuthService } from './servicios/auth.service';
import { Router } from "@angular/router";
import { CreditosComponent } from "./componentes/creditos/creditos.component";
import { ModalController } from "@ionic/angular";

export interface Menuitems{
  Nombre: string;
  Ruta: string;
  Icono : string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  public usuario = [
    { 
      Nombre: "Inicio",
      Ruta: "home",
      Icono: "home",
      Funcion: "1"
    },
    {
      Nombre: "Ingresar",
      Ruta: "ingresar",
      Icono: "log-in",
      Funcion: "2"
    },
    {
      Nombre: "Registro",
      Ruta: "registro",
      Icono: "add-circle",
      Funcion: "3"
    },
    {
      Nombre: "Créditos",
      Ruta: "registro",
      Icono: "information-circle",
      Funcion: "4"
    }];

  public administrador = [
      { 
        Nombre: "Registrar",
        Ruta: "registrar",
        Icono: "add-circle",
        Funcion: "1"  
      },
      {
        Nombre: "Modificar",
        Ruta: "modificar",
        Icono: "pencil",
        Funcion: "2" 
      },
      {
        Nombre: "Eliminar",
        Ruta: "eliminar",
        Icono: "close",
        Funcion: "3" 
      },
      {
        Nombre: "Salir",
        Ruta: "home",
        Icono: "exit",
        Funcion: "4" 
      }];

  public estudiante = [
        { 
          Nombre: "Consultar",
          Ruta: "",
          Icono: "search",
          Funcion: "1"   
        },
        {
          Nombre: "Salir",
          Ruta: "",
          Icono: "exit",
          Funcion: "2",
        }];    

  reciberango = "";

  constructor(
    public AuthService: AuthService,
    private Router: Router,
    private menu: MenuController,
    private platform: Platform,
    private modal : ModalController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {

  }
  funcionusuario(funcion:any){
    if(funcion=="1"){
      this.menu.enable(true, 'MUsuario');
      this.Router.navigate(['home']);
    }else{
      if(funcion=="2"){
        this.menu.enable(true, 'MUsuario');
        this.Router.navigate(['ingresar']);
      }else{
        if(funcion=="3"){
          this.menu.enable(true, 'MUsuario');
          this.Router.navigate(['registro']);
        }else if(funcion=="4"){
            this.modal.create({
              component: CreditosComponent,
              componentProps: {
              }
            }).then((modal) => modal.present());
          
        }
      }
    }
  }

  funcionadmin(funcion:any){
    if(funcion=="1"){
      this.menu.enable(true, 'MAdmin');
      this.Router.navigate(['administrador']);
    }else{
      if(funcion=="2"){
        this.menu.enable(true, 'MAdmin');
      this.Router.navigate(['modificar']);
      }else{
        if(funcion=="3"){
          this.menu.enable(true, 'MAdmin');
          this.Router.navigate(['eliminar']);
        }else{
          if(funcion=="4"){
            this.AuthService.logout();
              this.menu.enable(true, 'MUsuario');
          }
        }
      }
    }
  }

  funcionestudiante(funcion:any){
    if(funcion=="1"){
      this.menu.enable(true,'MEstudiante');
      this.Router.navigate(['estudiante']);
    }else{
      if(funcion=="2"){
        this.AuthService.logout();
        this.menu.enable(true, 'MUsuario');
      }
    }
  }
}
