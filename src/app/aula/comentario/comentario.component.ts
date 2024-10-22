import { Component, OnInit } from '@angular/core';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCard, MatCardModule} from '@angular/material/card';
import { AulaService } from '../../services/aula.service';
import { Aula } from '../../models/aula';

@Component({
  selector: 'app-comentario',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  templateUrl: './comentario.component.html',
  styleUrl: './comentario.component.css'
})
  export class ComentarioComponent implements OnInit {
    
    formGroup: FormGroup;
    aula: Aula = new Aula();
  
    constructor(private router: Router,
                private aulaService: AulaService,
                private formBuilder: FormBuilder) {
    }
  
    ngOnInit() {
      this.createFormGroup();
    }
  
    createFormGroup() {
      this.formGroup = this.formBuilder.group({
        name: ['', [Validators.required]],
      });
    }
  
    goAulaList() {
      this.router.navigate(['/aula']).then();
    }
  
    save() {
      let formData = this.formGroup.getRawValue();
      Object.assign(this.aula, formData);
      this.aulaService.save(this.aula).subscribe(() => {
        this.router.navigate(['/aula']).then();
      });
    }
}
