import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent {
  @Input() blog: Blog | undefined;
  @Output() edit = new EventEmitter<Blog>();
  @Output() delete = new EventEmitter<Blog>();

  editBlog(id: any) {
    this.edit.emit(id);
    
  }

  deleteBlog(id: any) {
    this.delete.emit(id);
  }
}
