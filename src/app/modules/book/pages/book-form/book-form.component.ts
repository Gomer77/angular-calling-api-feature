import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit, OnDestroy {
  // book:Book | undefined
  bookForm: FormGroup
  authorsArray: FormArray
  urlID: any
  sub: Subscription | undefined

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private bookService: BookService, private router: Router) {
    this.bookForm = this.fb.group({
      id: [],
      name: [''],
      authors: this.fb.array(['']),
      isbn: ['']
    })
    this.authorsArray = this.bookForm.get('authors') as FormArray
    this.route.paramMap.subscribe(params => {
      this.urlID = params.get('id')
    })
  }

  onSubmit = () => {
    const myBook: Book = this.bookForm.getRawValue() as Book
    if (!this.urlID) {
      this.bookService.createBooks(myBook).subscribe()
    } else {
      this.bookService.updateBooks(myBook).subscribe()
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

  ngOnDestroy(): void {
    this.sub?.unsubscribe
  }

  ngOnInit(): void {
    if(this.urlID) {
      this.sub = this.bookService.editBook(parseInt(this.urlID)).subscribe(data => {
        this.bookForm = this.fb.group({
          id: [data[0].id],
          name: [data[0].name],
          authors: this.fb.array([]),
          isbn: [data[0].isbn]
        })
        this.authorsArray = this.bookForm.get('authors') as FormArray
        for(let author of data[0].authors){
          this.authorsArray.push(new FormControl(author))
        }
      })
    }
  }

  // editBook(book: Book) {
  //   this.bookForm.get('id')?.setValue(book.id)
  //   this.bookForm.get('name')?.setValue(book.name)
  //   this.authorsArray.clear();
  //   for(let author of book.authors){
  //     this.authorsArray.push(this.fb.control(author))
  //   }
  //   this.bookForm.get('isbn')?.setValue(book.isbn)
  // }

  clear = () => {
    this.bookForm.reset()
    this.authorsArray.clear()
  }
}
