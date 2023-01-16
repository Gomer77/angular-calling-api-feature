import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  book:Book | undefined
  bookForm: FormGroup
  authorsArray: FormArray

  constructor(private fb: FormBuilder, private route: ActivatedRoute, 
    private bookService: BookService, private router: Router) {
    this.bookForm = this.fb.group({
      name: [''],
      authors: this.fb.array(['']),
      isbn: [''] 
    })
    this.authorsArray = this.bookForm.get('authors') as FormArray
  }

  onSubmit = () => {
    if (!this.book) {
      const myBook: Book = this.bookForm.getRawValue() as Book
      myBook.id = this.bookService.generateBookId()
      this.bookService.books.push(myBook)
    } else {
      const myBook: Book =  this.bookForm.getRawValue() as Book
      myBook.id = this.book.id
      this.bookService.updateBook(myBook)
      console.log(myBook)
    }
    this.router.navigate(['book'])
  } 

  addAuthor = () => {
    this.authorsArray.push(this.fb.control(''))
  }

  deleteAuthor = (i:number) => {
    this.authorsArray.removeAt(i)
  }

  ngOnInit(): void {
    let id: number
    this.route.params.subscribe(params => {
      id = params['id']
      if(id){
        this.book = this.bookService.returnBook(id)
        if(this.book){
          this.editBook(this.book)
        }
      }
    })
  }

  editBook(book: Book) {
    this.bookForm.get('id')?.setValue(book.id)
    this.bookForm.get('name')?.setValue(book.name)
    this.authorsArray.clear();
    for(let author of book.authors){
      this.authorsArray.push(this.fb.control(author))
    }
    this.bookForm.get('isbn')?.setValue(book.isbn)
  }

  clear = () => {
    this.bookForm.reset()
    this.authorsArray.clear()
  }
}
