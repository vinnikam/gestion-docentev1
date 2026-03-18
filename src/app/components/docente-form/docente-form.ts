import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {DocenteService} from '../../services/docente-service';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';


@Component({
  selector: 'app-docente-form',
  standalone: true,
  imports: [FormsModule,CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule, CardModule],
  templateUrl: './docente-form.html'
})
export class DocenteForm {
  form: FormGroup;

  constructor(private readonly  fb: FormBuilder, private readonly  docenteService: DocenteService,
              private readonly router: Router) {
    this.form = this.fb.group({

      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],

    });
  }

  guardar() {
    if (this.form.valid) {
      this.docenteService.addDocente(this.form.value).subscribe({
        next: () => {
          alert('¡Docente creado!');
          this.router.navigate(['/listar']);
        }
      });
    }
  }
}
