import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';



@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
