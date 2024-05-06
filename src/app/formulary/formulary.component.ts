import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.css']
})
export class FormularyComponent{
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  // Método para iniciar sesión
  login() {
    if (this.loginForm.valid) {
      // Aquí puedes enviar los datos del formulario al backend para la autenticación
      console.log(this.loginForm.value);
    } else {
      // Si el formulario no es válido, marca los campos como tocados para mostrar errores
      this.loginForm.markAllAsTouched();
    }
  }
}
