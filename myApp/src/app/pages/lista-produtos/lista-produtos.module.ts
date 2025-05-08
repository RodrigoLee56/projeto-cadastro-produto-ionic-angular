import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ListaProdutosComponent } from './lista-produtos.component';

const routes: Routes = [
  {
    path: '',
    component: ListaProdutosComponent
  }
]

@NgModule({
  declarations: [ListaProdutosComponent],
  imports: [
    FormsModule,
        CommonModule,
        IonicModule,
        RouterModule.forChild(routes)
  ]
})

export class ListaProdutosModule {}