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
}
