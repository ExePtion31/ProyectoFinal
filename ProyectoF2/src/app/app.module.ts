import { environment } from './../environments/environment.prod';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { firebaseConfig } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, AngularFirestoreDocument } from "@angular/fire/firestore";
import { AngularFirestore } from "@angular/fire/firestore";
import { EditarComponent } from "./componentes/editar/editar.component";
import { CreditosComponent } from "./componentes/creditos/creditos.component";
import { FormsModule } from '@angular/forms';
import { PipeModule } from "./pipe/pipe.module";


@NgModule({
  
  declarations: [AppComponent, EditarComponent, CreditosComponent],
  entryComponents: [EditarComponent, CreditosComponent],
  imports: [
            BrowserModule,  
            IonicModule.forRoot(),
            AngularFireModule.initializeApp(firebaseConfig),
            AngularFireAuthModule,
            AngularFirestoreModule,
            PipeModule,
            FormsModule,
            AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestore,
    { provide:AngularFirestoreDocument, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
