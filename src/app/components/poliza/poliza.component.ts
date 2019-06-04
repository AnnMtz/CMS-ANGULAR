import { Component, OnInit } from '@angular/core';
import { PolizaService } from '../../poliza.service';
import { Poliza } from '../../PolizaModel';

@Component({
  selector: 'app-poliza',
  templateUrl: './poliza.component.html'
})
export class PolizaComponent implements OnInit {

  public httpResultPoliza: Array<Poliza>;

  constructor(private polizaService: PolizaService) { 
    this.httpResultPoliza = new Array();
    
  }

  ngOnInit() {
    this.polizaService.fetchAllPoliza()
    .subscribe(polizaArray => {polizaArray.forEach(
      poliza => {
        this.httpResultPoliza.push(poliza);
      });
      console.log(this.httpResultPoliza);
      
    });
  }

}


