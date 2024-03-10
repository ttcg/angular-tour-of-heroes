import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, catchError, of, tap } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';
import { DuendeClamin } from './duende-claim';

@Injectable({
  providedIn: 'root'
})
export class DuendeService {

  private apiUrl = 'https://demo.duendesoftware.com/api/test';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private oauthService: OAuthService) { }

  headers = { 'Authorization': 'Bearer ' + this.oauthService.getAccessToken() }

  callTestEndpoint(): Observable<DuendeClamin[]> {
    return this.http.get<DuendeClamin[]>(this.apiUrl, { headers: this.headers } )
      .pipe(
        tap({ complete: () => this.messageService.add(`DuendeService: fetched Test endpoint`) }),
        catchError(this.handleError<DuendeClamin[]>('callTestEndpoint', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.messageService.add(`DuendeService: ${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
