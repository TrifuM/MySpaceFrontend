import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-space-bottom-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-space-bottom-nav.component.html',
  styleUrl: './my-space-bottom-nav.component.scss'
})
export class MySpaceBottomNavComponent {
  @Input() active: string = 'home';
  @Output() navClick = new EventEmitter<string>();
  @Output() fabClick = new EventEmitter<void>();

  navItems = [
    { key: 'main-page', icon: 'fas fa-home', label: 'Home' },
    { key: 'modules', icon: 'fas fa-th-large', label: 'Modules' },
    { key: 'profile', icon: 'fas fa-user', label: 'Profile' },
    { key: 'settings', icon: 'fas fa-cog', label: 'Settings' }
  ];

  onNavClick(key: string) {
    this.navClick.emit(key);
  }

  onFabClick() {
    this.fabClick.emit();
  }
} 