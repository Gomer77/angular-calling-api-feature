import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilerComponent } from './pages/profiler/profiler.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfilerComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
