import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from 'src/app/shared/model/post.interface';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.scss']
})
export class PostcardComponent implements OnInit {

  @Input() postObj !: Ipost

  constructor() { }

  ngOnInit(): void {
    // $(function () {
    //   $('[data-toggle="tooltip"]').tooltip()
    // })
  }

}
