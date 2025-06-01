import { NgModule } from '@angular/core';
import { MySpaceButtonComponent } from './button/my-space-button.component';
import { MySpaceInputComponent } from './input/my-space-input.component';
import { MySpaceCardComponent } from './card/my-space-card.component';

@NgModule({
  imports: [MySpaceButtonComponent, MySpaceInputComponent, MySpaceCardComponent],
  exports: [MySpaceButtonComponent, MySpaceInputComponent, MySpaceCardComponent]
})
export class MySpaceComponentsModule {} 