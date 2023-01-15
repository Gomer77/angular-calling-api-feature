import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
   books: Book[] = [
    {
      id: 1,
      name: 'The Lord of the Rings',
      authors: ['J.R.R. Tolkien'],
      isbn: '1234567890'
    },
    {
      id: 2,
      name: 'The Godfather',
      authors: ['J.R.R. Tolkien', 'Mario Puzo'],
      isbn: '987654321'
    }
  ]
  getBook(): Book[]{
    return this.books
  }

  deleteBook(id: number): void {
    this.books.splice(id, 1);
  }

  deleteAll():void {
    this.books = [];
  }

}
