import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent,
    BlogFormComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class BlogModule { }
