export default class ChampDao{
    async getChamp(name){
        let url = `https://ddragon.leagueoflegends.com/cdn/14.16.1/data/es_ES/champion/${name}.json`;
        await fetch(url);
        let datos = await respuesta.json();
        return datos;

    }



}