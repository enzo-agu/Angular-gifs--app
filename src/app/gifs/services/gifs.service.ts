import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, Searchesponse } from '../interfaces/gifs.interfaces';

@Injectable({
  // SERVICIO 👇 DISPONILE EN TODA LA APP, CUANDO DICE 'root'
  // SI NO ESTUVIERA EL PROVIDEIN 'root' SE DEBERÍA PROVEER EL SERVICIO
  //  A TRAVÉS DE PROVIDERS[] EN EL MODULO QUE SE QUIERA UTILIZAR Y SI OTROS
  // COMPONENTES NECESITARÁN EL SERVICIO SE TENDRÍA QUE EXPORTAR
  providedIn: 'root'
})
export class GifsService {

  public gifsList: Gif [] = [];

 private _tagsHistory : string[] = [];

 private privateapiKey:string ='YLO6K6pZdLgHQlzujMShayHD9AZ9l3SC'
 private serviceUrl:string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {

    // EL CONSTRUCTOR ES LO PRIMERO QUE SE EJECUTA CUANDO EL COMPONENTE SE CARGA
    // POR LO TANTO ES EL LUGAR IDEAL PARA CARGAR EL LOCALSTORAGE SI EXISTE ALGUN GIF, DE MANERA QUE SE CARGUE EN LA UI.
    this.loadLocalStorage();
    console.log('Gifs')
   }

  private organizeHistory(tag:string){
    tag= tag.toLowerCase();

    // SI EL TAG YA EXISTE EN EL ARRAY LO ELIMINO 👇
    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter( tagHistory => tagHistory !== tag);
    }

    // AGREGO EL TAG AL PRINCIPIO DEL ARRAY 👇
    this._tagsHistory.unshift(tag);
    // SOLO GUARDO LOS 10 PRIMEROS ELEMENTOS 👇
    this._tagsHistory = this.tagsHistoryList.splice(0,10);
    this.saveLocalStorage();

   }

  get tagsHistoryList() {
    return [...this._tagsHistory];
  }

  private saveLocalStorage(){
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage():void{

    if(!localStorage.getItem('history')) return;

    this._tagsHistory=JSON.parse(localStorage.getItem('history')!);

    if(this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0])

}


  searchTag(tag:string){
    if(tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.privateapiKey)
    .set('q', tag)
    .set('limit', '10');

    // EL OBS. ES UN FLUJO DE INFORMACION
    //  EL OBSERVABLE ES UNA PROMESA QUE SE RESUELVE CON EL MÉTODO GET Y A LO LARGO DEL TIEMPO
    // PUEDE EMITIR VARIOS VALORES
    // EN ESTE CASO SE EMITE UNA VEZ Y SE RESUELVE LA PROMESA
    // ES DECIR CON EL OBSERVABLE SIEMPRE VOY A ESTAR ESCUCHANDO
    this.http.get<Searchesponse>(`${this.serviceUrl}/search`,{params}).subscribe(resp=>{

      this.gifsList = resp.data;

    })

  }

}
// fetch('https://api.giphy.com/v1/gifs/search?api_key=YLO6K6pZdLgHQlzujMShayHD9AZ9l3SC&q=valorant&limit=10')
// .then(resp=>resp.json())
// .then(data=>{
//   console.log(data);
// })


