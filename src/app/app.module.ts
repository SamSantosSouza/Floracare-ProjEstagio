import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule} from 'ngx-owl-carousel-o'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule 
  ],
  providers: [],
})
export class AppModule { }