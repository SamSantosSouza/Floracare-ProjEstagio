import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [

    {path: "", component: MainComponent},
    {path: "aboutus", component: AboutusComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }