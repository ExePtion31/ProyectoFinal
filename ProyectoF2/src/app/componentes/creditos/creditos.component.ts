import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.scss'],
})
export class CreditosComponent implements OnInit {

  informacion: Array<any> = [
                            {
                              Nombre: 'Giovanni Baquero Vargas',
                              Foto: '../../../assets/img/creditos/gio.jpg',
                              Carrera: 'Desarrollo de Software.',
                              Edad: '20.',
                              Semestre: 'Quinto.',
                              email: 'giovanni.baquero@uniagustiniana.edu.co'
                            },
                            {
                              Nombre: 'Luis ALberto Vasquéz Rativa',
                              Foto: '../../../assets/img/creditos/luis.jpg',
                              Carrera: 'Desarrollo de Software.',
                              Edad: '19.',
                              Semestre: 'Quinto.',
                              email: 'luis.vasquez@uniagustiniana.edu.co'
                            }];

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {}

  cerrar(){
    this.modal.dismiss();
  }

}
