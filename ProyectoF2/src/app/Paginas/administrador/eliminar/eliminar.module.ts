import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EliminarPageRoutingModule } from './eliminar-routing.module';
import { EliminarPage } from './eliminar.page';
import { PipeModule } from 'src/app/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipeModule,
    EliminarPageRoutingModule
  ],
  declarations: [EliminarPage]
})
export class EliminarPageModule {}
