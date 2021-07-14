import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  consentCheckBox: boolean = false;
  submitted: boolean = false;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {}

  registerForm = this.formBuilder.group({
    email: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
    verifiedPassword: ['', Validators.required],
  });

  checkBoxHandler() {
    this.consentCheckBox = !this.consentCheckBox;
  }

  onSubmit(): void {
    this.submitted = true;

    if (!this.registerForm?.valid) {
      return;
    }

    console.log(this.submitted);
    if (this.registerForm?.valid && this.consentCheckBox) {
      this.productService
        .registerUser(this.registerForm?.value)
        .subscribe((result) =>
          alert(`Welcome, ${result.firstName} ${result.lastName}!`)
        );
      this.registerForm.reset();
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
