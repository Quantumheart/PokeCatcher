import {Component, Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Version} from './version-list/version.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'poke-catcher';

  constructor() {
  }

  ngOnInit(): void {

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

  getVersions(): Observable<Record<string, Version[]>> {
    return this.httpClient.get<Record<string, Version[]>>('http://localhost:3000/versions');
  }

  getVersionByName(name: string) {
    return this.httpClient.get<{id: number, name: string, names: string[], }>('http://localhost:3000/versions',{params: {name: name}});
  }
}
