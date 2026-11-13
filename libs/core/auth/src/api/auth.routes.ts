import { Route } from '@angular/router';
import { ForgotPasswordPageComponent } from '../feature/forgot-password-page.component';
import { LoginPageComponent } from '../feature/login-page.component';
import { SignUpPageComponent } from '../feature/sign-up-page.component';
import { VerifyEmailPageComponent } from '../feature/verify-email-page.component';

export const authFeatureRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginPageComponent, data: { title: 'Sign in' } },
  { path: 'sign-up', component: SignUpPageComponent, data: { title: 'Create account' } },
  { path: 'forgot-password', component: ForgotPasswordPageComponent, data: { title: 'Reset password' } },
  { path: 'verify-email', component: VerifyEmailPageComponent, data: { title: 'Verify email' } },
];
