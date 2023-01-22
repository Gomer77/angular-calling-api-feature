import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  book?: Book[] | undefined;

  serverUrl = 'http://localhost:3000'

  constructor(private http: HttpClient){}

  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.serverUrl}/books`).pipe(
      tap((b: Book[]) =>{
        return b
      })
    )
  }

  createBooks(book: Book) {
    return this.http.post<Book[]>(`${this.serverUrl}/books`, book).pipe(
      tap(b => b)
    )
  }

  editBook(id: number){
    return this.http.get<Book[]>(`${this.serverUrl}/books`).pipe(
      map((book:Book[]) => {
        return book.filter(b => b.id === id)
      })
    )
  }

  updateBooks(book: Book) {
    return this.http.put<Book>(`${this.serverUrl}/books/${book.id}`, book).pipe(
      tap(b => b)
    )
  }

  deleteBooks(id: number) {
    return this.http.delete<Book>(`${this.serverUrl}/books/${id}`)
  }
  //  books: Book[] = [
  //   {
  //     id: 1,
  //     name: 'The Lord of the Rings',
  //     authors: ['J.R.R. Tolkien'],
  //     isbn: '1234567890'
  //   },
  //   {
  //     id: 2,
  //     name: 'The Godfather',
  //     authors: ['J.R.R. Tolkien', 'Mario Puzo'],
  //     isbn: '987654321'
  //   }
  // ]
  // getBook(): Book[]{
  //   return this.books
  // }

  // updateBook(book: Book): void {
  //   this.books.forEach(bookHere => {
  //     if (bookHere.id === book.id) {
  //       bookHere.name = book.name
  //       bookHere.isbn = book.isbn
  //       bookHere.authors = book.authors
  //     }
  //   })
  // }

  // returnBook(idFind: number): Book{
  //   return this.books[idFind-1]
  // }

  // deleteBook(id: number): void {
  //   this.books.splice(id, 1);
  // }

  // deleteAll():void {
  //   this.books = []
  // }

  // generateBookId():number {
  //   let length = this.books.length
  //   return length + 1
  // }

}
