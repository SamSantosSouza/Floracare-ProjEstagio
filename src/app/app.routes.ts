import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContComponent } from './components/cont/cont.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [

    {path: "", component: MainComponent},
    {path: "aboutus", component: AboutusComponent},
    {path: "cont", component: ContComponent},
    {path: "prods", component: ProductsComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }