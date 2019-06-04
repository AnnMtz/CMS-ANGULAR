import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brokrs } from './BrokrsModel';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'aplication/json',
    'Access-Control-Allow-Origin': '*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class BrokrsService {

  constructor(private http: HttpClient) { }
  
  public fetchAllBrokrs(): Observable<Brokrs[]>{
    return this.http.get('http://api-staging.gobrokr.com/api/v1/users?access_token=85tnAd6azI9z2BXZneiZDz25Gp5ebkZmMf8GMkprXyDPwwSCrL1lL29zaOwvUujq', httpOptions) as Observable<Brokrs[]>;
  }
}
