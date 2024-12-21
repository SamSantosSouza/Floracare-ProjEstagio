import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
