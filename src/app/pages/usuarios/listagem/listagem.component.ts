import { Component, ViewEncapsulation } from '@angular/core';
import { PageTitleComponent } from "../../../components/page-title/page-title.component";

@Component({
    selector: 'app-listagem-usuarios',
    standalone: true,
    templateUrl: './listagem.component.html',
    styleUrl: './listagem.component.css'
    //encapsulation: ViewEncapsulation.None
    ,
    imports: [PageTitleComponent]
})
export class ListagemUsuariosComponent {
  tituloDaPagina: string = "Usuários"

}
