import { Route } from '@angular/router';
import { LandingPageComponent } from '../feature/landing-page/landing-page.component';
import { FaqPageComponent } from '../feature/trust-pages/faq-page.component';
import { PrivacyPageComponent } from '../feature/trust-pages/privacy-page.component';
import { TermsPageComponent } from '../feature/trust-pages/terms-page.component';
import { TrustPageComponent } from '../feature/trust-pages/trust-page.component';

export const marketingLandingRoutes: Route[] = [
  { path: '', component: LandingPageComponent },
  { path: 'faq', component: FaqPageComponent },
  { path: 'legal/privacy', component: PrivacyPageComponent },
  { path: 'legal/terms', component: TermsPageComponent },
  { path: 'trust', component: TrustPageComponent },
];
