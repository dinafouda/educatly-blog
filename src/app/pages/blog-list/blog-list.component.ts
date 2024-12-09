import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../shared/services/blog.service';
import { ErrorMessageComponent } from "../../shared/components/error-message/error-message.component";
import { LoadingIndicatorComponent } from "../../shared/components/loading-indicator/loading-indicator.component";
import { BlogItemComponent } from "./components/blog-item/blog-item.component";
import { BlogInterface } from '../../shared/models/blog.interface';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [ErrorMessageComponent, LoadingIndicatorComponent, BlogItemComponent],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent implements OnInit {
  posts: BlogInterface[] = [];
  currentPage: number = 1;
  isLoading: boolean = false;
  hasError: boolean = false;

  constructor(private _blogService: BlogService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.isLoading = true;
    this.hasError = false;

    this._blogService.fetchPosts(this.currentPage).subscribe({
      next: (data) => {
        this.posts = [...this.posts, ...data];
        this.isLoading = false;
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
      },
    });
  }

  showMore(): void {
    this.currentPage++;
    this.loadPosts();
  }
}
