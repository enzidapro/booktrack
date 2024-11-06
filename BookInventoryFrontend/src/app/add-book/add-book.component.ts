import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent {
  newBook: Book = {
    id: 0,
    title: '',
    author: '',
    isbn: '',
    publishedYear: 0,
    quantity: 0,
  };

  constructor(private bookService: BookService) {}

  addBook(): void {
    this.bookService.addBook(this.newBook).subscribe(() => {
      alert('Book added successfully!');
    });
  }
}
