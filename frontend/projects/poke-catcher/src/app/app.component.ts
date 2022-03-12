import {Component, Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'poke-catcher';

  pokemonVersions$ : Observable<NamedAPIResourceList> = new Observable<NamedAPIResourceList>();


  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.pokemonVersions$ = this.gameService.getVersions();
  }
}

export interface NamedAPIResource extends APIResource {
  name: string;
}

export interface APIResource {
  url: string;
}

export interface NamedAPIResourceList {
  count: number;
  /** The URL for the next page in the list */
  next: string | null;
  /** The URL for the previous page in the list */
  previous: string | null;
  /** A list of named API resources */
  results: NamedAPIResource[];
}

@Injectable()
export class GameService {
  constructor(private httpClient: HttpClient) {
  }

  getVersions(): Observable<NamedAPIResourceList> {
    return this.httpClient.get<NamedAPIResourceList>('http://localhost:3000/versions');
  }
}
