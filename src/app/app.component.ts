import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet, NavigationEnd } from '@angular/router';
import { MySpaceBottomNavComponent } from './my-space-components/bottom-nav/my-space-bottom-nav.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { trigger, transition, style, animate, query, group } from '@angular/animations';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, MySpaceBottomNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            width: '100%',
            left: 0,
            right: 0
          })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('1000ms cubic-bezier(.4,0,.2,1)', style({ opacity: 0, transform: 'translateY(-80px) scale(0.96)' }))
          ], { optional: true }),
          query(':enter', [
            style({ opacity: 0, transform: 'translateY(80px) scale(1.04)' }),
            animate('1000ms cubic-bezier(.4,0,.2,1)', style({ opacity: 1, transform: 'none' }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'my-space-frontend';
  currentRoute: string = '';
  isFadingOut = false;
  private pendingNav: string | null = null;
  navOrder = ['main-page', 'modules', 'profile', 'settings'];
  currentNavIndex = 0;
  slideDirection: 'left' | 'right' = 'left';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // Normalize the route: remove leading/trailing slashes, get last segment
        let url = event.urlAfterRedirects || event.url;
        url = url.split('?')[0].replace(/\/+$/, ''); // Remove trailing slashes
        const segments = url.split('/').filter(Boolean);
        this.currentRoute = segments.length > 0 ? segments[segments.length - 1] : 'main-page';
        this.currentNavIndex = this.navOrder.indexOf(this.currentRoute);
        this.isFadingOut = false;
        this.pendingNav = null;
      });
    this.router.navigate(['/login']);
  }

  onNavClick(tab: string) {
    if (this.isFadingOut || tab === this.currentRoute) return;
    const targetIndex = this.navOrder.indexOf(tab);
    this.slideDirection = targetIndex > this.currentNavIndex ? 'right' : 'left';
    this.isFadingOut = true;
    this.pendingNav = tab;
    setTimeout(() => {
      if (this.pendingNav) {
        this.router.navigate([this.pendingNav]);
      }
    }, 500); // match fade-out duration
  }

  onFabClick() {
    // Example FAB action
    alert('FAB clicked!');
  }

  onRouteAnimationStart(event: any) {
  }

  onRouteAnimationDone(event: any) {
  }
}
