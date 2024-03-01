import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, RouterLink, CommonModule]
})
export class AppComponent {
  title = 'aula-1-treinamento';

  constructor() {
    console.log('Iniciando o construtor')
  }

  ngOnInit() {
    console.log('Iniciando o OnInit')
  }
}
