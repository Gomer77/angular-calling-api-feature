import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfilerComponent } from './pages/profiler/profiler.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilerComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
