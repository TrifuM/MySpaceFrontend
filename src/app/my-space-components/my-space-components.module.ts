import { NgModule } from '@angular/core';
import { MySpaceButtonComponent } from './button/my-space-button.component';
import { MySpaceInputComponent } from './input/my-space-input.component';
import { MySpaceCardComponent } from './card/my-space-card.component';
import { MySpaceBottomNavComponent } from './bottom-nav/my-space-bottom-nav.component';


@NgModule({
  imports: [MySpaceButtonComponent, MySpaceInputComponent, MySpaceCardComponent, MySpaceBottomNavComponent],
  exports: [MySpaceButtonComponent, MySpaceInputComponent, MySpaceCardComponent, MySpaceBottomNavComponent]
})
export class MySpaceComponentsModule {} 