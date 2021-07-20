import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  logIn: boolean = false;
  incorrectCredentials: boolean = false;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onLogin(): void {
    this.logIn = true;
    if (!this.loginForm?.valid) {
      return;
    }

    if (this.loginForm?.valid) {
      this.userService.loginUser(this.loginForm?.value).subscribe(
        () => {
          localStorage.setItem('user', this.loginForm.get('email')?.value);
          this.userService.isLoggedIn = true;
          this.router.navigate(['/home']);
        },
        (error) => {
          if (error) this.incorrectCredentials = true;
        }
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
}
