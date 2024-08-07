import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../../service/rxjs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _rxjs : RxjsService
  ) { }

  ngOnInit(): void {
    this.handlingCustObservable()
  }


  handlingCustObservable(){
    this._rxjs.ourInterval$.subscribe((num) => {
         console.log(num);
    })
  }
}
