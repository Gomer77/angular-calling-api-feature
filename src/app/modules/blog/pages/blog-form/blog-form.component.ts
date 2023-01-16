import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {
  blog:Blog | undefined
  blogForm: FormGroup
  commentsArray: FormArray

  constructor(private fb: FormBuilder, private route: ActivatedRoute, 
    private blogService: BlogService, private router: Router) {
    this.blogForm = this.fb.group({
      title: [''],
      description: [''],
      author: [''],
      comments: this.fb.array(['']),
    })
    this.commentsArray = this.blogForm.get('comments') as FormArray
  }

  onSubmit = () => {
    if (!this.blog) {
      const myBlog: Blog = this.blogForm.getRawValue() as Blog
      myBlog.id = this.blogService.generateBlogId()
      this.blogService.blog.push(myBlog)
    } else {
      const myBlog: Blog =  this.blogForm.getRawValue() as Blog
      myBlog.id = this.blog.id
      this.blogService.updateBlog(myBlog)
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

  ngOnInit(): void {
    let id: number
    this.route.params.subscribe(params => {
      id = params['id']
      if(id){
        this.blog = this.blogService.returnBlog(id)
        if(this.blog){
          this.editBlog(this.blog)
        }
      }
    })
  }

  editBlog(blog: Blog) {
    this.blogForm.get('id')?.setValue(blog.id)
    this.blogForm.get('title')?.setValue(blog.title)
    this.blogForm.get('description')?.setValue(blog.description)
    this.blogForm.get('author')?.setValue(blog.author)
    this.commentsArray.clear();
    for(let comment of blog.comments){
      this.commentsArray.push(this.fb.control(comment))
    }
  }

  clear = () => {
    this.blogForm.reset()
    this.commentsArray.clear()
  }
}
