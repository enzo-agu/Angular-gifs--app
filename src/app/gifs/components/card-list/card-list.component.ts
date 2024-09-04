import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {

  // 👇 VIENEN LOS DATOS DEL SERVICIO Y SE USAN A TRAVÉS DEL @INPUT
  @Input()
  public gifs: Gif[] = []

}
