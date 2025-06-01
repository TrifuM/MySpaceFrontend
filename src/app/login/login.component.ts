import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MySpaceComponentsModule } from '../my-space-components/my-space-components.module';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MySpaceComponentsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';

  onSubmit() {
    // Placeholder for login logic
    alert(`Email: ${this.email}\nPassword: ${this.password}`);
  }
} 