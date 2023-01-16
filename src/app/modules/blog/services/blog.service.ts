import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blog: Blog[] = [
    {
      id: 1,
      title: 'Angular',
      description: 'This is Angular blog post',
      author: 'John Doe',
      comments: ['Very Hard', 'Very Easy']
    },
    {
      id: 2,
      title: 'React',
      description: 'This is React blog post',
      author: 'Google',
      comments: ['Very Hard', 'Very Easy']
    }
  ]
  getBlog(): Blog[] {
    return this.blog
  }

  updateBlog(blog: Blog): void {
    this.blog.forEach(blogHere => {
      if (blogHere.id === blog.id) {
        blogHere.title = blog.title
        blogHere.description = blog.description
        blogHere.author = blog.author
        blogHere.comments = blog.comments
      }
    })
  }

  returnBlog(idFind: number): Blog{
    return this.blog[idFind-1]
  }

  deleteBlog(id: number): void {
    this.blog.splice(id, 1);
  }

  deleteAll():void {
    this.blog = []
  }

  generateBlogId():number {
    let length = this.blog.length
    return length + 1
  }
}
