import { Component, OnInit } from '@angular/core';
import { NotificacionesService } from '../../notificaciones.service';
import { Notificaciones } from '../../NotificacionesModel';


@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html'
})
export class NotificacionesComponent implements OnInit {

  public httpResultNotificaciones: Array<Notificaciones>;

  constructor(private notificacionesService: NotificacionesService) {
    this.httpResultNotificaciones = new Array();
    this.notificacionesService.fetchAllNotificaciones()
    .subscribe(notificacionesArray => {notificacionesArray.forEach(
      notificaciones => {
        this.httpResultNotificaciones.push(notificaciones);
    });
    });
   }
  ngOnInit() {
  }

}
