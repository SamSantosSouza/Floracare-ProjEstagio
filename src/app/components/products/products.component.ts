import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FooterComponent, CarouselModule, CommonModule ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  categories: { [key: string]: Product[] } = {}; 

  products: Product[] = [
    {id: 1, name:'Pacote de protetores diarios', description:'pacote de absoventes 16 unidades,ideais para uso diário entre ciclos menstruais. Feitos com materiais absorventes e respiráveis, proporcionado conforto e segurança ao longo do dia.', price:18.90, imageUrl: '/assets/Protetordiario.png', category:'absorventes'},
    {id: 2, name:'Absorventes Reutilizavél', description:'absorventes feito de tecido inteligente, impermeavéis e superabsorventes ', price:33, imageUrl: '/assets/AbsorventeEco.png', category:'absorventes'},
    {id: 3, name:'Absorventes Internos', description:'pacote de absoventes internos 10 unidades, confortáveis e discretos, ideais para uso em dias de fluxo moderado a intenso. ', price:19.80 , imageUrl: '/assets/AbsInterno.png', category:'absorventes'},
    {id: 4, name:'Coletor Menstrual', description:'coletor menstrual, reutilizável, seguro e confortável, ideal para coletar o fluxo menstrual de forma eficiente e sustentável. Feita de silicone de grau médico, oferece até 12 horas de proteção ', price:39.90 , imageUrl: '/assets/ColetorMenstrual.png', category:'absorventes'},
    {id: 5, name:'Bolsa Necessaire Estampada', description:'Necessaire estampada moderna e prática, feita com materiais de alta qualidade que proporcionam durabilidade e resistência. Ideal para armazenar absorventes ou itens essenciais com estilo e organização, mantendo tudo ao seu alcance com design atraente.', price:79.99, imageUrl: '/assets/NecessaireEstampa.png', category:'necessaire'},
    {id: 6, name:'Bolsa Necessaire Rosa Simples', description:'Necessaire econômica e funcional, feita de materiais mais leves e duráveis. Perfeita para armazenar absorventes e itens essenciais com praticidade, mantendo o essencial de forma discreta e prática.', price:48.99, imageUrl: '/assets/NecessaireSimples.png', category:'necessaire'},
    {id: 7, name:'Bolsa Necessaire Básica', description:'Necessaire prática e discreta para armazenar absorventes internos, externos ou calcinhas absorventes. Ideal para transportar confortavelmente produtos menstruais, garantindo organização e conveniência onde quer que você esteja.', price:22.99, imageUrl: '/assets/NecessaireBasica.png', category:'necessaire'},
    {id: 8, name:'Calcinha Absorvente Preta', description:'Calcinha absorvente, projetada para absorver o fluxo menstrual com conforto e segurança. Feita com materiais de alta absorção e tecidos respiráveis e proporcionam conforto durante o ciclo menstrual.', price:44.00, imageUrl: '/assets/CalciAbsorvente.png', category:'calciabsorvente'},
    {id: 9, name:'Kit Calcinhas Absorventes', description:'Kit com 3 unidades de calcinhas absorventes, projetadas para absorver o fluxo menstrual. Feita com materiais de alta absorção e tecidos respiráveis e proporcionam conforto durante o ciclo menstrual.', price:135.00, imageUrl: '/assets/KitCalcinhas.png', category:'calciabsorvente'},
    {id: 10, name:'Calcinha Absorvente Rosa', description:'Calcinha absorvente, projetada para absorver o fluxo menstrual com conforto e segurança. Feita com materiais de alta absorção e tecidos respiráveis e proporcionam conforto durante o ciclo menstrual.', price:44.00, imageUrl: '/assets/CalciAbsorRosa.png', category:'calciabsorvente'},
    {id: 12, name:'Calcinha Absorvente Roxa', description:'Calcinha absorvente, projetada para absorver o fluxo menstrual com conforto e segurança. Feita com materiais de alta absorção e tecidos respiráveis e proporcionam conforto durante o ciclo menstrual.', price:44.00, imageUrl: '/assets/CalciAbsorRoxa.png', category:'calciabsorvente'},
  ];


  ngOnInit(): void {
    this.products.forEach((product) => {
      if (!this.categories[product.category]) {
        this.categories[product.category] = [];
      }
      this.categories[product.category].push(product);
    });
  }
}
