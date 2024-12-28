import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-cont',
  standalone: true,
  imports: [CommonModule, ButtonPrimaryComponent,ReactiveFormsModule,FooterComponent],
  templateUrl: './cont.component.html',
  styleUrl: './cont.component.scss'
})
export class ContComponent {
  contactForm: FormGroup;
  loading: boolean = false;

  constructor(private http: HttpClient) {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.loading = true;

      this.http.post('http://localhost:4000/contact', this.contactForm.value).subscribe(
        (response) => {
          console.log('Formulário enviado com sucesso!', response);
          this.loading = false;
          this.contactForm.reset();
        },
        (error) => {
          console.error('Erro ao enviar o formulário', error);
          this.loading = false;
        }
      );
    } else {
      this.contactForm.markAllAsTouched();
      console.log('Formulário inválido');
    }
  }
}
