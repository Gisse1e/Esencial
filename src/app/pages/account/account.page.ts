import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Usuario {
  nombre: string;
  email: string;
  celular: string;
  direccion?: string;
}

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: false,
})
export class AccountPage {
  user: Usuario = {
    nombre: 'Samuel Herrera',
    email: 'samhero@email.com',
    celular: '+56912345678',
    direccion: ''
  };

  editMode = false;
  editUser: Usuario = { ...this.user };

  validationErrors = {
    nombre: '',
    email: '',
    celular: '',
    direccion: ''
  };

  constructor(private router: Router) {}

  editarPerfil() {
    this.editUser = { ...this.user };
    this.editMode = true;
    this.validationErrors = {
      nombre: '',
      email: '',
      celular: '',
      direccion: ''
    };
  }

  validarCampos() {
    this.validationErrors = {
      nombre: '',
      email: '',
      celular: '',
      direccion: ''
    };

    if (!this.editUser.nombre || this.editUser.nombre.trim().length < 2) {
      this.validationErrors.nombre = 'El nombre y apellido es obligatorio, debe tener al menos 7 caracteres.';
    }
    if (!this.editUser.email || !/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(this.editUser.email)) {
      this.validationErrors.email = 'Ingresa un email válido.';
    }
    if (!this.editUser.celular || !/^\+?56\d{9}$/.test(this.editUser.celular)) {
      this.validationErrors.celular = 'Ingresa un celular chileno válido (ej: +56912345678).';
    }
    // Validación opcional de dirección
    if (this.editUser.direccion && this.editUser.direccion.trim().length < 5) {
      this.validationErrors.direccion = 'Ingrese nombre de calle y número.';
    }
    return Object.values(this.validationErrors).every(e => !e);
  }

  guardarPerfil() {
    if (!this.validarCampos()) {
      return;
    }
    this.user = { ...this.editUser };
    this.editMode = false;
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  cancelarEdicion() {
    this.editMode = false;
  }

  cerrarSesion() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
