import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TillerComponentComponent } from './tiller-component/tiller-component.component';
import { QuarterComponentComponent } from './quarter-component/quarter-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TillerComponentComponent
    , QuarterComponentComponent
  ],
  exports: [
    TillerComponentComponent
  ]
})
export class FirstModuleModule { }
