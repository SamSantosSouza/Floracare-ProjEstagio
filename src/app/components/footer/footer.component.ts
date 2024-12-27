import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule, ButtonPrimaryComponent, ReactiveFormsModule, CommonModule,  HttpClientModule, ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footer: FormGroup;
  loading: boolean = false;

  constructor(private http: HttpClient) {
    this.footer = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit(){
    if(this.footer.valid) {
      this.loading = true;


    this.http.post('http://localhost:3000/contato', this.footer.value).subscribe(
    (response) => {
      console.log( 'formulário enviado com sucesso!', response);
      this.loading = false
      this.footer.reset()
    },
    (error) => {
      console.error('Erro ao enviar o formulário', error);
      this.loading = false
    }
    )

   
  } else {
    this.footer.markAllAsTouched()
    console.log("formulário inválido");
  }
}

  currentYear: number = new Date().getFullYear();
}
