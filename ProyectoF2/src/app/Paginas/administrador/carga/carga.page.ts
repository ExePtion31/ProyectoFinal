import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../servicios/auth.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.page.html',
  styleUrls: ['./carga.page.scss'],
})
export class CargaPage implements OnInit {

  nombre: string;
  apellido: string;
  carrera: string;
  documento: string;
  email: string;
  password: string;
  rango: string;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    public AuthService: AuthService,
  ) { }

  ngOnInit() {

    this.nombre= this.ActivatedRoute.snapshot.paramMap.get('nombre');
    this.apellido= this.ActivatedRoute.snapshot.paramMap.get('apellido');
    this.carrera= this.ActivatedRoute.snapshot.paramMap.get('carrera');
    this.documento= this.ActivatedRoute.snapshot.paramMap.get('documento');
    this.email= this.ActivatedRoute.snapshot.paramMap.get('email');
    this.password= this.ActivatedRoute.snapshot.paramMap.get('password');
    this.rango= this.ActivatedRoute.snapshot.paramMap.get('rango');

    this.AuthService.registeradm(this.nombre, this.apellido, this.carrera, this.documento ,this.email, this.password, this.rango).then(() =>{
      
    }).catch(err => alert("Este usuario ya esta registrado"));
  }

}
