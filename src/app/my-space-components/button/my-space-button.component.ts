import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'my-space-button',
  templateUrl: './my-space-button.component.html',
  styleUrl: './my-space-button.component.scss',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class MySpaceButtonComponent {
  @Input() label: string = 'Button';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Output() buttonClick = new EventEmitter<Event>();

  @Input() icon?: string; // icon class or path
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() rounded: boolean = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  onClick(event: Event) {
    if (!this.disabled) {
      this.buttonClick.emit(event);
    }
  }
} 