import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../../service/rxjs.service';

@Component({
  selector: 'app-consumer2',
  templateUrl: './consumer2.component.html',
  styleUrls: ['./consumer2.component.scss']
})
export class Consumer2Component implements OnInit {

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
