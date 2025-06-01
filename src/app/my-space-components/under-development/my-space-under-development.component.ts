import { Component } from '@angular/core';
import { MySpaceCardComponent } from '../card/my-space-card.component';

@Component({
  selector: 'my-space-under-development',
  standalone: true,
  imports: [MySpaceCardComponent],
  templateUrl: './my-space-under-development.component.html',
  styleUrl: './my-space-under-development.component.scss'
})
export class MySpaceUnderDevelopmentComponent {} 