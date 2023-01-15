import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {
  @Input() book: Book | undefined;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  editBook(): void {
    if(this.book) {
      this.edit.emit(this.book.id);
    }
 }

  deleteBook() : void {
    if(this.book) {
      this.delete.emit(this.book);
  }
}

}