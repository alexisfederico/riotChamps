export default class champPositionDAO{
     async getAll(){
        let respuesta = await fetch(window.location.origin+"/model/dao/champPosition.json");
        let datos = await respuesta.json();
        return datos;

     }
     async getAllPositionName(){
        let respuesta = await fetch(window.location.origin+"/model/dao/champPosition.json");
        let datos = await respuesta.json();
        return Object.getOwnPropertyNames(datos);
     } 
     async getChampPosition(position){
        let respuesta = await fetch(window.location.origin+"/model/dao/champPosition.json");
        let datos = await respuesta.json();
        return datos[position];
     }
}