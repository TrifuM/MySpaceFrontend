import { NgModule } from '@angular/core';
import { MySpaceButtonComponent } from './button/my-space-button.component';
import { MySpaceInputComponent } from './input/my-space-input.component';
import { MySpaceCardComponent } from './card/my-space-card.component';
import { MySpaceBottomNavComponent } from './bottom-nav/my-space-bottom-nav.component';
import { MySpaceUnderDevelopmentComponent } from './under-development/my-space-under-development.component';
import { MySpaceInfoComponent } from './info/my-space-info.component';

@NgModule({
  imports: [MySpaceButtonComponent, MySpaceInputComponent, MySpaceCardComponent, MySpaceBottomNavComponent, MySpaceUnderDevelopmentComponent, MySpaceInfoComponent],
  exports: [MySpaceButtonComponent, MySpaceInputComponent, MySpaceCardComponent, MySpaceBottomNavComponent, MySpaceUnderDevelopmentComponent, MySpaceInfoComponent]
})
export class MySpaceComponentsModule {} 