import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage, MatButtonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
