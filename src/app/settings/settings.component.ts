import { Component } from '@angular/core';
import { MySpaceComponentsModule } from '../my-space-components/my-space-components.module';


@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [MySpaceComponentsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
 
} 