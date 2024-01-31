import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, retry, share, tap, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RmApiService {

  http = inject(HttpClient);

  private readonly BASE_URL = 'https://rickandmortyapi.com/api/';

  getCharacters(apiUrl: string = `${this.BASE_URL}/character`): Observable<any> {
    return this.http.get(apiUrl);
  }
}


