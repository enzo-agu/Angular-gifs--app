import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  // IMPORTO 👇 EL SERVICIO DE GIFS
  constructor (private gifsService: GifsService) {}

  // "TAGS" ME DEVUELVE UN ARRAY YA QUE
  // EN EL SERVICIO "TAGSHISTORYLIST" ES UN MÉTODO GETTER QUE RETORNA
  // UNA COPIA DEL ARRAY "_TAGSHISTORY"
  get tags():string[]{
    return this.gifsService.tagsHistoryList;
  }

  // 👇 LLAMO AL MÉTODO "SEARCHSIDEBARTAG" EL CUAL
  // LLAMA AL SERVICIO DE GIFS
  // PARA BUSCAR EL TAG QUE SE PASA POR PARÁMETRO
  searchSidebarTag( tag:string):void{
    this.gifsService.searchTag(tag);
  }

}
