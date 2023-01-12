import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookRoutingModule } from './book-routing.module';
import { BookItemComponent } from './components/book-item/book-item.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    SharedModule
  ]
})
export class BookModule { }
