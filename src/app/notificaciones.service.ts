import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notificaciones } from './NotificacionesModel';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'aplication/json',
    'Access-Control-Allow-Origin': '*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  constructor(private http: HttpClient) { }
  
  public fetchAllNotificaciones(): Observable<Notificaciones[]>{
    return this.http.get('http://api-staging.gobrokr.com/api/v1/push-notifications?access_token=S83aMWUJa1UuWXjvGoPXruXZj9SYBls4voOoSlt0sgCYKKknH9HLbOkmmyir7m9A', httpOptions) as Observable<Notificaciones[]>;
  }
}

