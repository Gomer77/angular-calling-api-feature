import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {
  @Input() book: Book | undefined;
  @Output() edit = new EventEmitter<Book>();
  @Output() delete = new EventEmitter<Book>();

  editBook(id: any): void {
    this.edit.emit(id);
  }

  deleteBook(id: any) : void {
    this.delete.emit(id);
  }

}
