import { Component, OnInit } from '@angular/core';
import { BuroService } from '../../buro.service';
import { Buro } from '../../BuroModel';

@Component({
  selector: 'app-buro',
  templateUrl: './buro.component.html'
})
export class BuroComponent implements OnInit {

  public httpResultBuro: Array<Buro>;

  constructor(private buroService: BuroService) {
    this.httpResultBuro = new Array();
    this.buroService.fetchAllBuro()
    .subscribe(buroArray => {buroArray.forEach(
      buro => {
        this.httpResultBuro.push(buro);
      });
    });
   }

  ngOnInit() {
  }

}
