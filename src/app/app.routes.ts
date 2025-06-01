import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfileComponent } from './profile/profile.component';
import { ModulesComponent } from './modules/modules.component';
import { SettingsComponent } from './settings/settings.component';
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'modules', component: ModulesComponent },
  { path: 'settings', component: SettingsComponent },
];
