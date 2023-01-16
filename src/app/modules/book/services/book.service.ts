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

  updateBook(book: Book): void {
    this.books.forEach(bookHere => {
      if (bookHere.id === book.id) {
        bookHere.name = book.name
        bookHere.isbn = book.isbn
        bookHere.authors = book.authors
      }
    })
  }

  returnBook(idFind: number): Book{
    return this.books[idFind-1]
  }

  deleteBook(id: number): void {
    this.books.splice(id, 1);
  }

  deleteAll():void {
    this.books = []
  }

  generateBookId():number {
    let length = this.books.length
    return length + 1
  }

}
