import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, map, Subscription } from 'rxjs';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit, OnDestroy {

  subs: Subscription | undefined
  blogs: Blog[] = []

  constructor(private blogService: BlogService, private router: Router, private route: ActivatedRoute) { }

  //GET /blogs
  ngOnInit(): void {
    this.subs = this.blogService.getBlogs().subscribe(blog => {
      this.blogs = blog
    })
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe
  }

  //PUT /blogs
  add(): void {
    this.router.navigate(['form'], {relativeTo: this.route})
  }

  deleteAll(): void {
    this.blogs = []
    this.router.navigate(['blog'])
  }

  //POST /blogs
  edit(id: any): void {
    this.router.navigate(['form', id], {relativeTo: this.route})
  }

  //DELETE /blogs
  delete(id: any): void {
    this.subs = this.blogService.deleteBlogs(id).subscribe()
    this.router.navigate(['blog'])
  }
}
