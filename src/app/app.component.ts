import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet, NavigationEnd } from '@angular/router';
import { MySpaceBottomNavComponent } from './my-space-components/bottom-nav/my-space-bottom-nav.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, MySpaceBottomNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-space-frontend';
  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // Normalize the route: remove leading/trailing slashes, get last segment
        let url = event.urlAfterRedirects || event.url;
        url = url.split('?')[0].replace(/\/+$/, ''); // Remove trailing slashes
        const segments = url.split('/').filter(Boolean);
        this.currentRoute = segments.length > 0 ? segments[segments.length - 1] : 'main-page';
      });
    this.router.navigate(['/login']);
  }

  onNavClick(tab: string) {
    // Example navigation logic
    this.router.navigate([tab]);
  }

  onFabClick() {
    // Example FAB action
    alert('FAB clicked!');
  }
}
