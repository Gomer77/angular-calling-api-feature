import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Profile } from '../../models/profile';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-profiler',
  templateUrl: './profiler.component.html',
  styleUrls: ['./profiler.component.scss']
})
export class ProfilerComponent implements OnInit {
  profileForm: FormGroup

  constructor(private fb: FormBuilder){
    this.profileForm = this.fb.group({
      name: [''],
      email: [''],
      bio: [''],
      active: ['']
    })
  }

  ngOnInit(): void {
    this.profileForm.valueChanges.subscribe(data => {
      console.log(data)
    })
  }

  onSubmit = () => {
    console.log(this.profileForm.value)
  }

  clear(): void {
    this.profileForm.reset();
  }



}
  

