import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Juswho } from './JuswhoModel';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'aplication/json',
    'Access-Control-Allow-Origin': '*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class JuswhoService {

  constructor(private http: HttpClient) { }
  
  public fetchAllJuswho(): Observable<Juswho[]>{
    return this.http.get('http://api-staging.gobrokr.com/api/v1/poliza?access_token=5GqbG8lDlSU2zIUEX2DuEqKwI0Mud3rZzHHvhqJxvWNRKxtrHcKRvzqP9qX3A7oi', httpOptions) as Observable<Juswho[]>;
  }
}
