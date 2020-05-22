import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../servicios/auth.service';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.page.html',
  styleUrls: ['./estudiante.page.scss'],
})
export class EstudiantePage implements OnInit {

  Nombre: string;
  Apellido: string;
  Correo: string;
  Documento: any;
  Carrera: string;
  Cargo: string;

  constructor(
    private AuthService: AuthService,
    public ActivatedRoute: ActivatedRoute,
    private menu: MenuController
  ) { }

  ngOnInit() {
    this.menuUsuario();
    this.Nombre = this.ActivatedRoute.snapshot.paramMap.get('EnviaNombre');
    this.Apellido = this.ActivatedRoute.snapshot.paramMap.get('EnviaApellido');
    this.Correo = this.ActivatedRoute.snapshot.paramMap.get('EnviaCorreo');
    this.Cargo = this.ActivatedRoute.snapshot.paramMap.get('EnviaRango');
    this.Documento = this.ActivatedRoute.snapshot.paramMap.get('EnviaDocumento');
    this.Carrera = this.ActivatedRoute.snapshot.paramMap.get('EnviaCarrera');
    
  }
  menuUsuario() {
    this.menu.enable(true, 'MEstudiante');
  }

  desconectarse(){
    this.AuthService.logout();
  }
}
