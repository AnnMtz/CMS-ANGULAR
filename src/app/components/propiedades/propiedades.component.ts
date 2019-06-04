import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from '../../propiedades.service';
import { Propiedades } from '../../PropiedadesModel';


@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html'
})
export class PropiedadesComponent implements OnInit {

  public httpResultPropiedades: Array<Propiedades>;

  constructor(private propiedadesService: PropiedadesService) {
    this.httpResultPropiedades = new Array();
    this.propiedadesService.fetchAllPropiedades()
    .subscribe(propiedadesArray => {propiedadesArray.forEach(
      propiedades => {
        this.httpResultPropiedades.push(propiedades);
      });
    });
   }
  ngOnInit() {
  }

}
