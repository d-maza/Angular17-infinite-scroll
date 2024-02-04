import { HttpClient} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable  } from 'rxjs';
import { Result, Root } from '../models/character';


@Injectable({
  providedIn: 'root'
})
export class RmApiService {

  http = inject(HttpClient);

  private readonly BASE_URL = 'https://rickandmortyapi.com/api/';

  getCharacters(apiUrl: string = `${this.BASE_URL}/character`): Observable<Root> {
    return this.http.get<Root>(apiUrl);
  }

  getCharacter(id: number): Observable<Result> {
    return this.http.get<Result>(`${this.BASE_URL}/character/${id}`);
  }

}


