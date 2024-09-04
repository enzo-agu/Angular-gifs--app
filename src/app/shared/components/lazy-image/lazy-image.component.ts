import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit{
  public hasLoaded:boolean = false;

  @Input()
  public url!: string;

  @Input()
  public alt: string =''

// EL ONINIT SE EJECUTA CUANDO EL COMPONENTE SE INICIALIZA Y SE EJECUTA UNA SOLA VEZ
// EN EL CILO DE VIDA DEL COMPONENTE
  ngOnInit(): void {
   if(!this.url) throw new Error('URL property is required.');
  }

  onLoaded(){

    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);

  }

}
