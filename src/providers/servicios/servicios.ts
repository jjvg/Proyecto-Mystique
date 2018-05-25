import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AuthProvider} from '../../providers/auth/auth';

/*
  Generated class for the ServiciosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiciosProvider {
  
  servs:Array<
  {id:number,
   imagen:string,
   id_tipo_servicio:number,
   nombre:string,
   precio:number,
   descripcion:string,
   duracion:number,
   status:string,
   visible:boolean,
   select:boolean}>;

  constructor(public http: HttpClient,public auth : AuthProvider) {
    /*this.servs=[
      {name: 'Corte bajo', descripcion:'Corte hecho con maquinas',categoria: 'Peluqueria',url:'assets/imgs/Peinado1.png',rate:3},
      {name: 'Trensado especial', descripcion:'Perfecto para salir de noche',categoria: 'Peluqueria',url:'assets/imgs/peinado2.png',rate:2},
      {name: 'Maquillaje Ecologico', descripcion:'Facil de Remover',categoria: 'Maquillaje',url: 'assets/imgs/maquilla.png',rate:4},
      {name: 'Ojos Brillantes', descripcion:'Para resaltar tu mirada',categoria: 'Maquillaje',url:'assets/imgs/maquillaje2.png',rate:5}
    ]*/
    this.servs=[
  {id:null,
   imagen:'',
   id_tipo_servicio:0,
   nombre:'',
   precio:0,
   descripcion:'',
   duracion:0,
   status:'',
   visible:false,
   select:false}
   ];
    this.setServicios();
    console.log('Hello ServiciosProvider Provider');

 
  }
  getServicios(){
    return this.http.get(this.auth.ApiUrl()+'servicio');
  }
  getServicio(id){
    return this.http.get(this.auth.ApiUrl()+'servicio/'+id)
  }
  //getTiposServicios(){
  //  return this.http.get(this.auth.ApiUrl()+'tipo_servicio/')
   // }


  setServicios(){
    this.getServicios().subscribe(
      (data)=>{
        this.servs=data['data'];
        console.log(this.servs);
      },(error)=>{
        console.log(error)
      });
  }
  returnServicios(){
    return this.servs;
  }
  filterItems(searchTerm){
    return this.servs.filter((item) => {
     return item.nombre.toLowerCase().
     indexOf(searchTerm.toLowerCase()) > -1 ||
      item.id_tipo_servicio.valueOf() > -1;;
     });
    }
    
}
