import { Component } from '@angular/core';
import { MySpaceComponentsModule } from '../my-space-components/my-space-components.module';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MySpaceComponentsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
 
} 