import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LoginService } from '../../services/login/login.service';

import { User } from '../../interfaces/user.interface';
import { EMAIL_REGEX, customPasswordValidator } from '../../common/validators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  public isPasswordVisible = signal(false);

  constructor(private loginService: LoginService) {}

  public loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(EMAIL_REGEX),
    ]),

    password: new FormControl('', [
      Validators.required,
      customPasswordValidator(),
    ]),
  });

  public login(): void {
    if (this.loginForm.valid) {
      const user: User = this.loginForm.value as User;
      this.loginService.login(user);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  public togglePasswordVisibility(): void {
    this.isPasswordVisible.update((value) => !value);
  }
}
