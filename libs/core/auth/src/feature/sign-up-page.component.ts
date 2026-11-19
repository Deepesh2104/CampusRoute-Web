import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import {
  ClientAuditService,
  PROFILE_STORAGE_KEY,
  resolvePostAuthUrl,
  type LearnerProfileDraft,
} from '@campusroute/shared-util';

import { AuthSessionService } from '../application/auth-session.service';

import type { LearnerSignupProfile, SignupLearnerRole } from '../domain/auth-session.model';



const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



function isValidEmail(value: string): boolean {

  return EMAIL_RE.test(value.trim().toLowerCase());

}



function normalizePhone(value: string): string {

  return value.replace(/[\s-]/g, '').replace(/^\+?91/, '');

}



function isValidPhone(value: string): boolean {

  const digits = normalizePhone(value);

  return /^[6-9]\d{9}$/.test(digits);

}



const SCHOOL_STANDARDS = ['Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'] as const;

const COLLEGE_SEMESTERS = [

  'Semester 1',

  'Semester 2',

  'Semester 3',

  'Semester 4',

  'Semester 5',

  'Semester 6',

  'Semester 7',

  'Semester 8',

] as const;



@Component({

  selector: 'cr-auth-sign-up-page',

  imports: [FormsModule, RouterLink],

  template: `

    <div class="cr-auth-panel cr-auth-panel--signup" data-testid="auth-sign-up-page">

      <form (ngSubmit)="submit()" novalidate>

        <h3>Create your account</h3>

        <p class="sub">

          @if (intent() === 'simulator') {

            Sign up to save your cost simulator profile.

          } @else {

            Tell us who you are so we can tailor your route — school leads to college choice; college leads to

            career planning.

          }

        </p>



        <label for="cr-su-name">Full name</label>

        <input

          id="cr-su-name"

          type="text"

          autocomplete="name"

          data-testid="auth-sign-up-name"

          [(ngModel)]="name"

          name="name"

        />

        <span class="cr-auth-fe">{{ fieldError('name') }}</span>



        <label for="cr-su-email">Email</label>

        <input

          id="cr-su-email"

          type="email"

          inputmode="email"

          autocomplete="email"

          placeholder="you@school.edu"

          data-testid="auth-sign-up-email"

          [(ngModel)]="email"

          name="email"

        />

        <span class="cr-auth-fe">{{ fieldError('email') }}</span>



        <label for="cr-su-phone">Mobile number</label>

        <input

          id="cr-su-phone"

          type="tel"

          inputmode="tel"

          autocomplete="tel"

          placeholder="10-digit mobile"

          data-testid="auth-sign-up-phone"

          [(ngModel)]="phone"

          name="phone"

        />

        <span class="cr-auth-fe">{{ fieldError('phone') }}</span>



        <label for="cr-su-role">I am a</label>

        <select
          id="cr-su-role"
          name="role"
          data-testid="auth-sign-up-role"
          [ngModel]="role()"
          (ngModelChange)="role.set($event)"
        >

          <option value="School student">School student</option>

          <option value="College student">College student</option>

          <option value="Parent or guardian">Parent or guardian</option>

          <option value="Teacher or counsellor">Teacher or counsellor</option>

        </select>

        <p class="cr-auth-hint">{{ roleHint() }}</p>



        @if (isSchoolStudent()) {

          <div class="cr-auth-role-fields" data-testid="auth-sign-up-school-fields">

            <label for="cr-su-school">School</label>

            <input

              id="cr-su-school"

              type="text"

              autocomplete="organization"

              placeholder="School name and city"

              data-testid="auth-sign-up-school"

              [(ngModel)]="schoolName"

              name="schoolName"

            />

            <span class="cr-auth-fe">{{ fieldError('schoolName') }}</span>



            <label for="cr-su-standard">Standard / class</label>

            <select id="cr-su-standard" name="standard" data-testid="auth-sign-up-standard" [(ngModel)]="standard">

              <option value="" disabled>Select your class</option>

              @for (c of schoolStandards; track c) {

                <option [value]="c">{{ c }}</option>

              }

            </select>

            <span class="cr-auth-fe">{{ fieldError('standard') }}</span>

          </div>

        }



        @if (isCollegeStudent()) {

          <div class="cr-auth-role-fields" data-testid="auth-sign-up-college-fields">

            <label for="cr-su-college">College or university</label>

            <input

              id="cr-su-college"

              type="text"

              autocomplete="organization"

              placeholder="Institution name and campus"

              data-testid="auth-sign-up-college"

              [(ngModel)]="collegeName"

              name="collegeName"

            />

            <span class="cr-auth-fe">{{ fieldError('collegeName') }}</span>



            <label for="cr-su-semester">Current semester</label>

            <select id="cr-su-semester" name="semester" data-testid="auth-sign-up-semester" [(ngModel)]="semester">

              <option value="" disabled>Select semester</option>

              @for (s of collegeSemesters; track s) {

                <option [value]="s">{{ s }}</option>

              }

            </select>

            <span class="cr-auth-fe">{{ fieldError('semester') }}</span>

          </div>

        }



        @if (showUnder18Note()) {

          <p class="cr-auth-nt">If you are under 18, a parent or guardian will need to approve your account.</p>

        }



        <label for="cr-su-pw">Password</label>

        <div class="cr-auth-pw">

          <input

            id="cr-su-pw"

            [type]="showPassword() ? 'text' : 'password'"

            autocomplete="new-password"

            placeholder="At least 8 characters"

            data-testid="auth-sign-up-password"

            [(ngModel)]="password"

            name="password"

          />

          <button type="button" class="cr-auth-eye" (click)="showPassword.set(!showPassword())">

            {{ showPassword() ? 'Hide' : 'Show' }}

          </button>

        </div>

        <span class="cr-auth-fe">{{ fieldError('pw') }}</span>



        <label class="cr-auth-ck2">

          <input type="checkbox" [(ngModel)]="agreed" name="agreed" data-testid="auth-sign-up-terms" />

          I agree to the terms and privacy notice. My data is shared only with my consent.

        </label>

        <span class="cr-auth-fe">{{ fieldError('terms') }}</span>



        <button type="submit" class="cr-auth-btn" style="margin-top: 20px" data-testid="auth-sign-up-submit">

          Create account

        </button>

        <p class="cr-auth-am2" role="status">{{ status() }}</p>

        <p class="cr-auth-sw2">

          Already have an account? <a routerLink="/auth/login">Log in</a>

        </p>

      </form>

    </div>

  `,

  changeDetection: ChangeDetectionStrategy.OnPush,

})

export class SignUpPageComponent {

  private readonly auth = inject(AuthSessionService);

  private readonly audit = inject(ClientAuditService);

  private readonly router = inject(Router);

  private readonly route = inject(ActivatedRoute);



  readonly schoolStandards = SCHOOL_STANDARDS;

  readonly collegeSemesters = COLLEGE_SEMESTERS;



  readonly intent = signal(this.route.snapshot.queryParamMap.get('intent'));

  readonly showPassword = signal(false);

  readonly errors = signal<Record<string, string>>({});

  readonly status = signal('');



  name = '';

  email = '';

  phone = '';

  password = '';

  readonly role = signal<SignupLearnerRole>('College student');

  schoolName = '';

  standard = '';

  collegeName = '';

  semester = '';

  agreed = false;



  readonly isSchoolStudent = computed(() => this.role() === 'School student');

  readonly isCollegeStudent = computed(() => this.role() === 'College student');

  readonly showUnder18Note = computed(() => this.role() === 'School student');

  readonly roleHint = computed(() => {
    switch (this.role()) {

      case 'School student':

        return 'School students: we use your class to shortlist colleges, streams, and affordability — before you commit.';

      case 'College student':

        return 'College students: we use your semester to plan skills, internships, and career routes from where you are now.';

      case 'Parent or guardian':

        return 'Parents: link to your child’s plan with consent — college and career views stay scoped.';

      default:

        return 'Counsellors: demo workspace only until institution accounts ship.';

    }

  });



  fieldError(key: string): string {

    return this.errors()[key] ?? '';

  }



  submit(): void {

    this.errors.set({});

    this.status.set('');

    const next: Record<string, string> = {};



    if (this.name.trim().length < 2) {

      next['name'] = 'Enter your full name.';

    }

    if (!isValidEmail(this.email)) {

      next['email'] = 'Enter a valid email address.';

    }

    if (!isValidPhone(this.phone)) {

      next['phone'] = 'Enter a valid 10-digit mobile number.';

    }

    if (this.isSchoolStudent()) {

      if (this.schoolName.trim().length < 2) {

        next['schoolName'] = 'Enter your school name.';

      }

      if (!this.standard) {

        next['standard'] = 'Select your class.';

      }

    }

    if (this.isCollegeStudent()) {

      if (this.collegeName.trim().length < 2) {

        next['collegeName'] = 'Enter your college or university.';

      }

      if (!this.semester) {

        next['semester'] = 'Select your current semester.';

      }

    }

    if (this.password.length < 8) {

      next['pw'] = 'Password must be at least 8 characters.';

    }

    if (!this.agreed) {

      next['terms'] = 'Accept the terms to continue.';

    }



    if (Object.keys(next).length) {

      this.errors.set(next);

      return;

    }



    const learnerProfile: LearnerSignupProfile = { role: this.role() };

    if (this.isSchoolStudent()) {

      learnerProfile.schoolName = this.schoolName.trim();

      learnerProfile.standard = this.standard;

    }

    if (this.isCollegeStudent()) {

      learnerProfile.collegeName = this.collegeName.trim();

      learnerProfile.semester = this.semester;

    }



    const phoneDigits = normalizePhone(this.phone);



    this.auth.signIn(this.email.trim().toLowerCase(), this.name.trim(), {

      emailVerified: false,

      intent: this.intent() ?? undefined,

      phone: phoneDigits,

      learnerProfile,

    });

    const role = this.role();
    const profileSeed: LearnerProfileDraft = {
      displayName: this.name.trim(),
      email: this.email.trim().toLowerCase(),
      phone: phoneDigits,
      role,
      schoolName: this.isSchoolStudent() ? this.schoolName.trim() : undefined,
      standard: this.isSchoolStudent() ? this.standard : undefined,
      collegeName: this.isCollegeStudent() ? this.collegeName.trim() : undefined,
      semester: this.isCollegeStudent() ? this.semester : undefined,
      goal:
        role === 'School student'
          ? 'Shortlist colleges that fit my class and budget'
          : role === 'College student'
            ? 'Plan career from current semester'
            : 'Guide my family with consent',
      stream: role === 'School student' ? 'PCM' : 'Engineering',
      city: '',
      pocketMoneyMonthlyInr: 5_000,
      lifestyleBand: 'typical',
      boardPcmPct: 82,
      jeeMainPercentile: 94,
      entranceReadinessPct: 72,
    };
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profileSeed));

    this.audit.log('auth.sign-up.success', { scope: 'identity' });

    void this.router.navigate(['/auth/verify-email'], {

      queryParams: {

        returnUrl: resolvePostAuthUrl(null, this.intent()),

      },

    });

  }

}

