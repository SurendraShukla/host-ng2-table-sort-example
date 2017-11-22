import { Component } from '@angular/core';
import { PostData } from './models/post-data.model';
import { PostService } from './shared/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Displaying posts!';

  public data: Array<PostData>;
  public filterQuery = "";
  public rowsOnPage = 5;
  public sortBy = "title";
  public sortOrder = "asc";

  public rowsOnPageList = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

  constructor(private postService: PostService) {
    postService.getAllPosts().subscribe( (result: Array<PostData>) => {
      this.data = result;
    });
  }

}
