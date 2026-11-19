export { AuthSessionService } from './application/auth-session.service';
export { AuthSessionWatchdogService } from './application/auth-session-watchdog.service';
export { authGuard, emailVerifiedGuard, guestAuthGuard } from './api/auth.guards';
export { authFeatureRoutes } from './api/auth.routes';
export { SessionTimeoutBannerComponent } from './ui/session-timeout-banner.component';
export type { AuthSession, LearnerSignupProfile, SignupLearnerRole } from './domain/auth-session.model';
