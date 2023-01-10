import { Injectable } from '@angular/core';
import { Sushi } from './sushi';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SushiService {

  constructor(private http: HttpClient,private messageService: MessageService) { }


  getSushies(): Observable<Sushi[]> {
    return this.http.get<Sushi[]>(this.sushiUrl)
    .pipe(
      tap(_ => this.log('fetched sushi')),
      catchError(this.handleError<Sushi[]>('getSushi', [])))
    ;
  }

  getSushi(id: number): Observable<Sushi> {
    const url = `${this.sushiUrl}/${id}`;
    return this.http.get<Sushi>(url).pipe(
      tap(_ => this.log(`fetched sushi id=${id}`)),
      catchError(this.handleError<Sushi>(`getSushi id=${id}`))
    );
  }

  updateSushi(sushi: Sushi): Observable<any> {
    return this.http.put(this.sushiUrl, sushi, this.httpOptions).pipe(
      tap(_ => this.log(`updated sushi id=${sushi.id}`)),
      catchError(this.handleError<Sushi>(`updateSushi`))
    );
  }

  addSushi(sushi: Sushi): Observable<any> {
    return this.http.post<Sushi>(this.sushiUrl, sushi, this.httpOptions).pipe(
      tap((newSushi: Sushi) => this.log(`added sushi w/ id=${newSushi.id}`)),
      catchError(this.handleError<Sushi>('addSuchi'))
    );
  }

  deleteSushi(id: number): Observable<Sushi> {
    const url = `${this.sushiUrl}/${id}`;
  
    return this.http.delete<Sushi>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted sushi id=${id}`)),
      catchError(this.handleError<Sushi>('deleteSushi'))
    );
  }

  searchSushi(term: string): Observable<Sushi[]> {
    if (!term.trim()) {
      return of ([]);
    }
    return this.http.get<Sushi[]>(`${this.sushiUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found sushi matching "${term}"`) :
         this.log(`no sushi matching "${term}"`)),
      catchError(this.handleError<Sushi[]>('searchSushi', []))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  private log(message: string) {
    this.messageService.add(`SushiService: ${message}`);
  }

  private sushiUrl = 'api/sushi';

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`)
      return of(result as T);
    }
  }
}
