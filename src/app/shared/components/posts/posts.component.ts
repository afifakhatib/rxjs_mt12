import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../model/post.interface';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  postArr!: Ipost[];

  constructor(private _post: PostService) {}

  ngOnInit(): void {
    this._post.fetchAllPosts().subscribe((post: Ipost[]) => {
      this.postArr = post;
    });
  }
}
