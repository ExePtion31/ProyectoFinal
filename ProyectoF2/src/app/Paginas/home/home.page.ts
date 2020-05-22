import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  usuario: Array<any>= [{
                          Titulo: 'Login',
                          Descripcion: 'Exiten dos campos "correo" y "contraseña" debe ingresar los datos con los cuales usted se registro, luego de eso, dar Click al botón de "Acceder".',
                          img: '../../../assets/img/usuario/ingresar.PNG'
                        },
                        {
                          Titulo: 'Registrarse',
                          Descripcion: 'Llene los campos indicados en el formulario, una vez finalice, dar Click en el boton de "Registrarse."',
                          img: '../../../assets/img/usuario/registrar.PNG'
                        }];

  estudiante: Array<any>= [{
                            Titulo: 'Consultar',
                            Descripcion: 'En la pestaña de "Consultar, se mostrarala información del estudiante que ha sido registrado.',
                            img: '../../../assets/img/estudiante/consultar.PNG'
                          },
                          {
                            Titulo: 'Salir',
                            Descripcion: 'En el menú, existe un boton llamado "Salir", al dale Click, cierra automaticamente la sesión del estudiante y el redirigido al Login.',
                            img: '../../../assets/img/estudiante/salir.PNG' 
                          }];  
                          
  administrador: Array<any>= [{
                                Titulo: 'Registrar',
                                Descripcion: 'En la ventana "Regitrar" encontrará un formulario de registro, el cual debe llenar con los datos de la persona a registrar (Nombre, Appellido, Correo, etc). En el campo de "Cargo" el administrador decidirá si esa persona será registrada como estudiante o administrador.Una vez lleno el formulario, debe clickear en el boton "Registrar" para finalizar el registro.',
                                img: '../../../assets/img/administrador/registrar.PNG',
                                img2: '../../../assets/img/administrador/registrar2.PNG'
                              },
                              {
                                Titulo: 'Modificar',
                                Descripcion: 'En la pestaña de "Modificar", encontrará la información de todos los usuarios registrados (Administradores y Estudiantes), en la parte inferior de cada usuario, habrá un botón "Modificar", al dar click en el, lo mandara a otra pestaña en donde podra modifica los datos de dicho usuario. Hay que tener en cuenta que se tienen que llenar todoslo campos; una vez completado el formulario, tendrá que dar click nuevamente en el botón "Modificar" para que se apliquen los cambios.',
                                img: '../../../assets/img/administrador/Modificar.PNG',
                                img2: '../../../assets/img/administrador/Modificar2.PNG' 
                              },
                              {
                                Titulo: 'Eliminar',
                                Descripcion: 'La última pestaña de funciones es la de eliminar, en donde usted obtendrá los datos de todos los usuarios registrados (Administradores y Estudiantes) y podrá eliminar el usuario registrador dando Click en el botón "Eliminar".',
                                img: '../../../assets/img/administrador/eliminar.PNG',
                                img2: ' ' 
                              },
                              {
                                Titulo: 'Salir',
                                Descripcion: 'En el menú, existe un boton llamado "Salir", al dale Click, cierra automaticamente la sesión del estudiante y el redirigido al Login.',
                                img: '../../../assets/img/administrador/salir.PNG',
                                img2: ' ' 
                              }];                          

  constructor(
    private menu: MenuController,
  ) {}
  
  ngOnInit() {
    this.menuUsuario();
  }

  menuUsuario() {
    this.menu.enable(true, 'MUsuario');
  }
}