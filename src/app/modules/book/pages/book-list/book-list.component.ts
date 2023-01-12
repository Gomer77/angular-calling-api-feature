import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[] = []

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.books = this.bookService.getBook()
  }

  edit(id: number): void {
    console.log('edit', id)
  }

  delete(id: number): void {
    console.log('delete', id)
  }

}
