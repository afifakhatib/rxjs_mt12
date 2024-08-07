import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Ipost } from '../model/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService implements OnInit{

  postUrl : string = `${environment.baseUrl}/posts`

  constructor(
    private _http : HttpClient
  ) { }

  ngOnInit(): void {
   
  }


  fetchAllPosts() :Observable<Ipost[] >{
       return this._http.get<Ipost[]>((this.postUrl as string))
  }

  
}
