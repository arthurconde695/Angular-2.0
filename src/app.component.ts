import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cats = [
    { name: 'Whiskers', description: 'Adora ficar no topo da geladeira', image: 'path/to/image1.jpg' },
    { name: 'Mittens', description: 'Mestre em pegar brinquedos imaginários', image: 'path/to/image2.jpg' },
    { name: 'Shadow', description: 'Aparece do nada quando menos se espera!', image: 'path/to/image3.jpg' }
  ];
}
