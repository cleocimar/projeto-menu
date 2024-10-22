import { Component, OnInit } from '@angular/core';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {Aula} from '../models/aula';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {MatCard, MatCardModule} from '@angular/material/card';
import { AulaService } from '../services/aula.service';

@Component({
  selector: 'app-aula',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    DatePipe,
    MatCardModule
  ],
  templateUrl: './aula.component.html',
  styleUrl: './aula.component.css'
})
export class AulaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'created_at'];
  dataSource: Aula[] = [];

  constructor(private aulaService: AulaService,
              private router: Router) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.aulaService.getAll().subscribe(response => {
      this.dataSource = response;
    });
  }

  goAulaItem() {
    this.router.navigate(['aula/new']).then();
  }

}
