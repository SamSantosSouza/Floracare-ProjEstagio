import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';
import { ContComponent } from '../cont/cont.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage, MatButtonModule, FooterComponent, ContComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
   constructor(private router : Router) {}
  
    goToAboutUs() {
      this.router.navigate(['/aboutus']);
    }
  
    goToMain() {
      this.router.navigate([""]);
    }
}
