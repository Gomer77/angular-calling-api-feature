import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blog?: Blog[] | undefined

  serverUrl = 'http://localhost:3000'

  constructor(private http: HttpClient){}

  getBlogs(): Observable<Blog[]>{
    return this.http.get<Blog[]>(`${this.serverUrl}/blogs`).pipe(
      tap((b: Blog[]) =>{
        return b
      })
    )
  }

  createBlogs(blog: Blog) {
    return this.http.post<Blog[]>(`${this.serverUrl}/blogs`, blog).pipe(
      tap(b => b)
    )
  }

  editBlog(id: number) {
    return this.http.get<Blog[]>(`${this.serverUrl}/blogs`).pipe(
      map((blog: Blog[]) => {
        return blog.filter(b => b.id === id)
      })
    )
  }

  updateBlogs(blog: Blog) {
    return this.http.put<Blog>(`${this.serverUrl}/blogs/${blog.id}`, blog).pipe(
      tap(b => b)
    )
  }

  deleteBlogs(id: number) {
    return this.http.delete<Blog>(`${this.serverUrl}/blogs/${id}`)
  }

  // deleteAll() {
  //   this.blog = []
  // }

  // blog: Blog[] = [
  //   {
  //     id: 1,
  //     title: 'Angular',
  //     description: 'This is Angular blog post',
  //     author: 'John Doe',
  //     comments: ['Very Hard', 'Very Easy']
  //   },
  //   {
  //     id: 2,
  //     title: 'React',
  //     description: 'This is React blog post',
  //     author: 'Google',
  //     comments: ['Very Hard', 'Very Easy']
  //   }
  // ]

//   getBlog(): void {
//      this.getBlogs().subscribe(data =>{
//       this.blog = data
//   })
// }

//   updateBlog(blog: Blog): void {
//     this.blog?.forEach(blogHere => {
//       if (blogHere.id === blog.id) {
//         blogHere.title = blog.title
//         blogHere.description = blog.description
//         blogHere.author = blog.author
//         blogHere.comments = blog.comments
//       }
//     })
//   }

//   deleteBlog(id: number): void {
//     this.blog.splice(id, 1);
//   }
}