import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  submitted: boolean = false;
  emailError: string = '';

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  registerForm = this.formBuilder.group({
    email: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
    verifiedPassword: ['', Validators.required],
    consentCheckBox: [false, Validators.requiredTrue],
  });

  onSubmit(): void {
    this.submitted = true;

    if (!this.registerForm?.valid) {
      return;
    }

    if (this.registerForm?.valid) {
      this.userService.registerUser(this.registerForm?.value).subscribe(
        () => this.router.navigate(['/login']),
        (errorBody) => (this.emailError = errorBody.error)
      );
    }
  }

  emailValidator(control: any) {
    if (
      control.value.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      )
    ) {
      return;
    } else {
      return true;
    }
  }

  passwordValidator(password: string, verifiedPassword: string) {
    if (password === verifiedPassword) true;
    return false;
  }
}
