import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent {
  @Input() blog: Blog | undefined;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  editBlog(): void {
    if(this.blog) {
    this.edit.emit(this.blog);
    }
  }

  deleteBlog(): void {
    if(this.blog) {
    this.delete.emit(this.blog);
    }
  }
}
