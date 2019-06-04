import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Buro } from './BuroModel';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'aplication/json',
    'Access-Control-Allow-Origin': '*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class BuroService {

  constructor(private http: HttpClient) { }

  public fetchAllBuro(): Observable<Buro[]>{
    return this.http.get('http://api-staging.gobrokr.com/api/v1/blacklists?filter=%7B%20%20%20%22include%22%3A%20%5B%20%20%20%20%20%7B%20%20%20%20%20%20%20%22relation%22%3A%20%22user%22%2C%20%20%20%20%20%20%20%22scope%22%3A%20%7B%20%20%20%20%20%20%20%20%20%22fields%22%3A%20%5B%20%20%20%20%20%20%20%20%20%20%20%22id%22%2C%20%20%20%20%20%20%20%20%20%20%20%22name%22%2C%20%20%20%20%20%20%20%20%20%20%20%22lastname%22%20%20%20%20%20%20%20%20%20%5D%20%20%20%20%20%20%20%7D%20%20%20%20%20%7D%20%20%20%5D%20%7D&access_token=5GqbG8lDlSU2zIUEX2DuEqKwI0Mud3rZzHHvhqJxvWNRKxtrHcKRvzqP9qX3A7oi', httpOptions) as Observable<Buro[]>;
  }
}
