import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[] = []

  constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.books = this.bookService.getBook()
  }

  add(): void {
    this.router.navigate(['form'], {relativeTo: this.route})
  }

  deleteAll(): void {
    this.books = []
  }

  edit(id: number): void {
    this.router.navigate(['form', id], {relativeTo: this.route})
  }

  delete(id: number): void {
    this.bookService.deleteBook(id)
  }

}
