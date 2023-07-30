import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../books.interface';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlist$!: Observable<any>;

  constructor(public booksService: BooksService) { }

  ngOnInit(): void {
    this.wishlist$ = this.booksService.wishes$;
  }

  deletebook(book: Book) {
    this.booksService.fromWishlist(book);
  }

}
