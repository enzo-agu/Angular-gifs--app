import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    // 👇 EXPORTO EL SIDEBACOMPONENT Y LAZYIMAGECOMPONENT PARA PODER UTILIZARLOS EN OTROS MODULOS
    //  Y COMPONENTES
    SidebarComponent,
    LazyImageComponent
  ]
})
export class SharedModule { }
