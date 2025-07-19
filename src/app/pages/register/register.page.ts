import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export const CHILE_PHONE_MASK = {
  mask: [
    '+', '5', '6', '9',
    /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/
  ]
};

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage {
  registerForm: FormGroup;
  CHILE_PHONE_MASK = CHILE_PHONE_MASK;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required, Validators.pattern('^\\+569\\d{8}$')]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^(?=.*[A-Z])(?=.*\\d).{6,}$')
        ]
      ],
      confirmPassword: ['', Validators.required],
    }, { validators: this.passwordsMatch });
  }

  passwordsMatch(form: FormGroup) {
    return form.get('password')!.value === form.get('confirmPassword')!.value
      ? null : { mismatch: true };
  }

  registrar() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    // para lógica de registro (API)
    console.log('Datos de registro:', this.registerForm.value);
    this.router.navigate(['/daily']);
  }
}