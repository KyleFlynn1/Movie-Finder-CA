import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { IOMDBResponse } from '../omdbresponse';
import { IOMDBResponse2 } from '../omdbresponse2';

@Injectable({
  providedIn: 'root'
})

export class OmdbApiService {

  private _siteURL="https://www.omdbapi.com/"
  private _key="?i=tt3896198&apikey=cdfce4b5&t="
  private _key2="?i=tt3896198&apikey=cdfce4b5&s="
  constructor(private _http:HttpClient) { }

  getMovieData(movieName:string):Observable<IOMDBResponse> {
    return this._http.get<IOMDBResponse>(this._siteURL+ this._key + movieName)
    .pipe(
      tap(data => console.log('Moviedata/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }

  private handleError(err:HttpErrorResponse) {
    console.log('OmbApiServie:' + err.message);
    //previous versions return throwError("error: + err.message");

    return throwError(() => new Error("OmdbApiService:" + err.message))
  }

  getMoviesData(movieName:string, page:number):Observable<IOMDBResponse2> {
    return this._http.get<IOMDBResponse2>(this._siteURL+ this._key2 + movieName + "&page=" + page)
    .pipe(
      tap(data => console.log('Moviedata/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }
}
