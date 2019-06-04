import { Component, OnInit } from '@angular/core';
import { JuswhoService } from '../../juswho.service';
import { Juswho } from '../../JuswhoModel';

@Component({
  selector: 'app-juswho',
  templateUrl: './juswho.component.html'
})
export class JuswhoComponent implements OnInit {

  public httpResultJuswho: Array<Juswho>;
  constructor(private juswhoService: JuswhoService) {
    this.httpResultJuswho = new Array();
    this.juswhoService.fetchAllJuswho()
    .subscribe(juswhoArray => {juswhoArray.forEach(
      juswho => {
        this.httpResultJuswho.push(juswho);
      });
    });
   }

  ngOnInit() {
  }

}
