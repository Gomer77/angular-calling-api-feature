import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs: Blog[] = []

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlog();
  }

  getBlog() {
    this.blogs = this.blogService.getBlog()
  }

  edit(id: number): void {
    console.log('edit', id)
  }

  delete(id: number): void {
    console.log('delete', id)
  }
}
