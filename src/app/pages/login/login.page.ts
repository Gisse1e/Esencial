import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      if (this.loginForm.get('email')?.invalid) {
        this.mostrarAlerta('Por favor, ingrese un correo electrónico válido.');
      } else if (this.loginForm.get('password')?.invalid) {
        this.mostrarAlerta('La contraseña debe tener al menos 6 caracteres.');
      }
      return;
    }
    const { email } = this.loginForm.value;
    this.router.navigate(['/daily'], { state: { user: email } });
  }
}
