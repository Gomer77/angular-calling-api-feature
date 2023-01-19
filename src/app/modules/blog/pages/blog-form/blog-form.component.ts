import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit, OnDestroy{
  // blog:Blog | undefined
  blogForm: FormGroup
  commentsArray: FormArray
  urlId: any
  sub: Subscription | undefined


  constructor(private fb: FormBuilder, private route: ActivatedRoute, 
    private blogService: BlogService, private router: Router) {
    this.blogForm = this.fb.group({
      id: [],
      title: [''],
      description: [''],
      author: [''],
      comments: this.fb.array(['']),
    })
    this.commentsArray = this.blogForm.get('comments') as FormArray
    this.route.paramMap.subscribe(params => {
      this.urlId = params.get('id')
    })
  }

  onSubmit = () => {
    const myBlog: Blog = this.blogForm.getRawValue() as Blog
    if (!this.urlId) {
      this.blogService.createBlogs(myBlog).subscribe()
    } else {
      this.blogService.updateBlogs(myBlog).subscribe()
      console.log(myBlog)
    }
    this.router.navigate(['blog'])
  } 

  addComment = () => {
    this.commentsArray.push(this.fb.control(''))
  }

  deleteComment = (i:number) => {
    this.commentsArray.removeAt(i)
  }

  clear = () => {
    this.blogForm.reset()
    this.commentsArray.clear()
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe
  }

  ngOnInit(): void {
    if(this.urlId) {
     // Filling up forms for editing
     this.sub = this.blogService.editBlog(parseInt(this.urlId)).subscribe(data => {
      this.blogForm = this.fb.group({
        id: [data[0].id],
        title: [data[0].title],
        description: [data[0].description],
        author: [data[0].author],
        comments: this.fb.array([])
      })
      this.commentsArray = this.blogForm.get('comments') as FormArray
      for(let comment of data[0].comments) {
        this.commentsArray.push(new FormControl(comment))
      }
      })
    }
  }

  // editBlog(blog: Blog) {
  //   this.blogForm.get('id')?.setValue(blog.id)
  //   this.blogForm.get('title')?.setValue(blog.title)
  //   this.blogForm.get('description')?.setValue(blog.description)
  //   this.blogForm.get('author')?.setValue(blog.author)
  //   this.commentsArray.clear();
  //   for(let comment of blog.comments){
  //     this.commentsArray.push(this.fb.control(comment))
  //   }
  // }
}
