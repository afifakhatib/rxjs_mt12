import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../../service/rxjs.service';

@Component({
  selector: 'app-consumer3',
  templateUrl: './consumer3.component.html',
  styleUrls: ['./consumer3.component.scss']
})
export class Consumer3Component implements OnInit {

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
