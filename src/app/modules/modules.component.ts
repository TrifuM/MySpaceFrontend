import { Component } from '@angular/core';
import { MySpaceComponentsModule } from '../my-space-components/my-space-components.module';

@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [MySpaceComponentsModule],
  templateUrl: './modules.component.html',
  styleUrl: './modules.component.scss'
})
export class ModulesComponent {
 
} 