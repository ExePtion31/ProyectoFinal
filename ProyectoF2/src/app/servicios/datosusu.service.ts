import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument} from "@angular/fire/firestore";
import { usuarios } from '../Paginas/carga/carga.page';
import {map} from 'rxjs/operators';
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class DatosusuService {
  constructor(
    private db:AngularFirestore,
    private Router: Router,
    private Usuario : AngularFirestoreDocument<usuarios>
  ) { }

  getOneuser(IDuser:string){
    return this.db.doc(`usuarios/${IDuser}`).snapshotChanges().pipe(map(action =>{
      if(action.payload.exists == false){
        
      }else{
        const dta = action.payload.data() as usuarios;
        dta.id = action.payload.id;
        return dta;
      }
    }))
  }

  getAlluser(){
    return this.db.collection('usuarios').snapshotChanges();
  }

  borrarusu(ID:string): void{
    this.Usuario = this.db.doc<usuarios>(`usuarios/${ID}`);
    this.Usuario.delete();
    alert('Usuario eliminado exitosamente.');
    this.Router.navigate(['administrador']);
  }

  editarusu(id:string, nombre:string, apellido:string, carrera:string, documento:string, rango:string){

    this.db.collection('usuarios').doc(id).update({
      nombre: nombre,
      apellido: apellido,
      carrera: carrera,
      documento: documento,
      rango: rango,
    });
    alert('Usuario modificado correctamente.');
    this.Router.navigate(['administrador']);
  }
} 
