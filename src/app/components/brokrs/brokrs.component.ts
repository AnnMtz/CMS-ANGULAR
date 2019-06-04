import { Component, OnInit } from '@angular/core';
import {  BrokrsService } from '../../brokrs.service';
import {  Brokrs } from '../../BrokrsModel';

@Component({
  selector: 'app-brokrs',
  templateUrl: './brokrs.component.html'
})
export class BrokrsComponent implements OnInit {

  public httpResultBrokrs: Array<Brokrs>;

  constructor(private brokrsService: BrokrsService) {
    this.httpResultBrokrs = new Array();
    this.brokrsService.fetchAllBrokrs()
    .subscribe(brokersArray => {brokersArray.forEach(
        broker => {
          this.httpResultBrokrs.push(broker);
        });
    });
  }
  ngOnInit() {
  }

}
