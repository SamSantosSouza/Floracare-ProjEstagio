import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [FooterComponent, NgOptimizedImage,],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {

}
