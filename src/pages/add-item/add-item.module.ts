import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddItemPage } from './add-item';

@NgModule({
  declarations: [
    AddItemPage,
  ],
  exports: [
    AddItemPage,
  ],
  imports: [
    IonicPageModule.forChild(AddItemPage),
  ],
})
export class AddItemPageModule {}
