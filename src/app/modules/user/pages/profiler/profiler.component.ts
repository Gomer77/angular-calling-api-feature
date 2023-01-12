import { Component } from '@angular/core';
import { User } from '../../models/user';
import { Profile } from '../../models/profile';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profiler',
  templateUrl: './profiler.component.html',
  styleUrls: ['./profiler.component.scss']
})
export class ProfilerComponent {
  users: User[] = []

  user: User = new Profile();

  onSubmit = (userForm: NgForm) => {
    console.log(userForm.value)
  }
}
