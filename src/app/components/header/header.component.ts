import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from'@angular/material/button';
import {MatIconModule} from'@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,MatButtonModule,MatIconModule,NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
