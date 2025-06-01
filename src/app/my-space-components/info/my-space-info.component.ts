import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'my-space-info',
  standalone: true,
  templateUrl: './my-space-info.component.html',
  styleUrl: './my-space-info.component.scss',
  imports: [CommonModule]
})
export class MySpaceInfoComponent {
  @Input() type: 'info' | 'warning' | 'success' | 'error' = 'info';
} 