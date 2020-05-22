import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosusuService } from '../../../../servicios/datosusu.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.page.html',
  styleUrls: ['./carga.page.scss'],
})
export class CargaPage implements OnInit {

  id: string;
  nombre: string;
  apellido: string;
  carrera: string;
  documento: string;
  rango: string;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    public DatosusuService: DatosusuService
  ) { }

  ngOnInit() {
    this.id= this.ActivatedRoute.snapshot.paramMap.get('id');
    this.nombre= this.ActivatedRoute.snapshot.paramMap.get('nombre');
    this.apellido= this.ActivatedRoute.snapshot.paramMap.get('apellido');
    this.carrera= this.ActivatedRoute.snapshot.paramMap.get('carrera');
    this.documento= this.ActivatedRoute.snapshot.paramMap.get('documento');
    this.rango= this.ActivatedRoute.snapshot.paramMap.get('rango');

    this.DatosusuService.editarusu(this.id, this.nombre, this.apellido, this.carrera, this.documento, this.rango);
  }

}
