import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TillerComponentComponent } from './tiller-component/tiller-component.component';
import { QuarterComponentComponent } from './quarter-component/quarter-component.component';
import { FifthComponentComponent } from './fifth-component/fifth-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TillerComponentComponent
    , QuarterComponentComponent, FifthComponentComponent
  ],
  exports: [
    TillerComponentComponent
  ]
})
export class FirstModuleModule { }
