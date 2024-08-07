import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  posts:any[] = [];
  filteredPosts: any[] = [];
  searchTerm: string = '';


  constructor(private userservice:UserService) {
    

    
  }
  ngOnInit(): void {
    this.userservice.getPosts().subscribe(data=>{
      this.posts = data;
      this.filteredPosts = data;
    });
}

onSearch():void{
  if(this.searchTerm)
  {
    this.filteredPosts = this.posts.filter(post =>
      post.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

  }
  else
  {
    this.filteredPosts = this.posts;
  }
}
}
