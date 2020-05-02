import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Pokemon API';
  pokemon : any[] = [];
  constructor(private _httpService: HttpService) {
}
}

// export class AppComponent implements OnInit {
//   title: string = 'Pokemon API';
//   pokemon: any[] = [];

//   constructor(
//     private _http: HttpService
//   ) { }

//   ngOnInit() {
//     this._http.getPokemon()
//       .subscribe((data: any) => {
//         this.pokemon = data.pokemon;
//         console.log(data);
//       });
//   }

// }
