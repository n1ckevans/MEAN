import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) {
    this.getPokemon("gengar");
    this.getPokemon("rayquaza");
    this.ability(76);
  }

  getPokemon(name: string) {
    let pokemon = this._http.get('https://pokeapi.co/api/v2/pokemon/' + name);
    pokemon.subscribe(data => console.log(data.name + "'s ability is " + data.abilities[0].ability.name + "!"));
    return pokemon;
  }

  ability(id: number) {
    let thisAbility = this._http.get('https://pokeapi.co/api/v2/ability/' + id);
    thisAbility.subscribe(data => 
      {
        console.log("These Pokemon share the ability "+ data.name +" :");
        for (let i = 0; i < data.pokemon.length; i++){
          console.log(data.pokemon[i].pokemon.name);
        };

      });
     
    return thisAbility;
  }

}