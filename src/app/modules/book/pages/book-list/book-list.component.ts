import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  subs: Subscription | undefined
  books: Book[] = []

  constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute) { }

  //GET /books
  ngOnInit(): void {
    this.subs = this.bookService.getBooks().subscribe(books => {
      this.books = books
    })
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe
  }

  //PUT /books
  add(): void {
    this.router.navigate(['form'], {relativeTo: this.route})
  }

  deleteAll(): void {
    this.books = []
    this.router.navigate(['book'])
  }

  //POST /blogs
  edit(id: any): void {
    this.router.navigate(['form', id], {relativeTo: this.route})
  }

  //DELETE /blogs
  delete(id: any): void {
    this.subs = this.bookService.deleteBooks(id).subscribe()
    this.router.navigate(['book'])
  }

}
