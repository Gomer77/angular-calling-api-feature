import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup
  // name: FormControl
  // author: FormArray
  // isbn: FormControl
  constructor(private fb: FormBuilder){
    this.bookForm = this.fb.group({
      name: [''],
      author: this.fb.array([]),
      isbn: [''] 
    })
  }

  ngOnInit(): void {

  }
}
