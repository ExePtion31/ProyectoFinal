import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private AFAuth: AngularFireAuth,
    private menu: MenuController,
    private db: AngularFirestore, 
    private Router: Router
  ) { }

  login(email:string, password:string){
    return new Promise((resolve, rejected) => {
      this.AFAuth.signInWithEmailAndPassword(email, password).then(user => {
        const Dataid = user.user.uid;
        this.Router.navigate(["carga", Dataid]);
      }).catch(err => rejected(err));
    });
  }

  async register(nombre:string, apellido:string, carrera:string, documento:number ,email:string, password:string){
    return new Promise ((resolve, reject) =>{
      this.AFAuth.createUserWithEmailAndPassword(email, password).then(res =>{

        const uid = res.user.uid;
        this.db.collection('usuarios').doc(uid).set({
          nombre : nombre,
          apellido : apellido,
          correo : email,
          carrera: carrera,
          documento: documento,
          password : password,
          rango: 'Estudiante'
        })
        alert("Gracias por registrarte");
        this.AFAuth.signOut().then(() =>{
        this.Router.navigate(['ingresar']);
        })
        resolve(res);
      }).catch(err => reject(err));
    })
  }

  async registeradm(nombre:any, apellido:any, carrera:any, documento:any ,email:any, password:any, rango:any){
    return new Promise ((resolve, reject) =>{
      this.AFAuth.createUserWithEmailAndPassword(email, password).then(res =>{

          const uid = res.user.uid;
          this.db.collection('usuarios').doc(uid).set({
          nombre : nombre,
          apellido : apellido,
          correo : email,
          carrera: carrera,
          documento: documento,
          password : password,
          rango: rango
        })
        alert("Usuario registrado exitosamente");
        this.Router.navigate(['administrador']);
      }).catch(err => reject(err));
    });
  }


  logout(){
    this.AFAuth.signOut().then(() =>{
        this.menu.enable(true, 'MUsuario');
        this.Router.navigate(['ingresar']);
        window.location.reload();
    })
  }
}
