import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../../service/rxjs.service';

@Component({
  selector: 'app-consumer1',
  templateUrl: './consumer1.component.html',
  styleUrls: ['./consumer1.component.scss']
})
export class Consumer1Component implements OnInit {

  usernameVal !: String

  constructor(
    private _rxjs : RxjsService
  ) { }

  ngOnInit(): void {
    this._rxjs.usernameSubject$.subscribe((username)=>{
        this.usernameVal = username
    })
  }

}
