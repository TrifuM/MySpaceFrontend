import { Component } from '@angular/core';
import { MySpaceComponentsModule } from '../my-space-components/my-space-components.module';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MySpaceComponentsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
 
} 