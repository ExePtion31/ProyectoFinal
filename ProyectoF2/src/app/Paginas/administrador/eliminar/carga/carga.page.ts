import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DatosusuService } from "../../../../servicios/datosusu.service";

@Component({
  selector: 'app-carga',
  templateUrl: './carga.page.html',
  styleUrls: ['./carga.page.scss'],
})
export class CargaPage implements OnInit {

  id: string;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private DatosusuService: DatosusuService
  ) { }

  ngOnInit() {
    this.id= this.ActivatedRoute.snapshot.paramMap.get('id');
    this.DatosusuService.borrarusu(this.id);
  }

}
