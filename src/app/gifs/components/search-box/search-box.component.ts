import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar:</h5>
  <input type="text"
  class="form-control"
  placeholder="Buscar gifs"
  (keyup.enter)="searchTag()"
  #txtTagInput>
  `
})

export class SearchBoxComponent {
// EL VIEWCHILD 👇 SIRVE PARA REFERENCIAR UN ELEMENTO DEL DOM
//  O TAMBIEN UNA REFERENCIA LOCAL
// VIEWCHILDREN ES PARA REFERENCIAR VARIOS ELEMENTOS DEL DOM
// EL CUAL REGESA UN ARREGLO DE TODOS LOS ELEMENTOS HTML.
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  // EL SERVICIO 👇 SE INYECTA EN EL CONSTRUCTOR
  constructor(private gifsService:GifsService) { }

  searchTag(){

    const newTag= this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value='';
  }
}
