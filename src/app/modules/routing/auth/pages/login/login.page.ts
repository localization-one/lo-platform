import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@ngneat/reactive-forms';
import { AuthService, LoginDto } from '@services/auth';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup<LoginDto>;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl<string>('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl<string>('', [Validators.required]),
    });
  }

  handleSubmit(): void {
    this.authService.login(this.loginForm.value);
  }
}
