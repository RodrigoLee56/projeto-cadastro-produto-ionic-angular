import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NovoProdutoComponent } from './novo-produto.component';

const routes: Routes = [
  {
    path: '',
    component: NovoProdutoComponent
  }
]

@NgModule({
  declarations: [NovoProdutoComponent],
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class NovoProdutoModule {}