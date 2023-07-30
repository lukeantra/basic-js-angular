import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Book, BookResponse } from './books.interface';
// import { Book, BookResponse } from './books.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseUrl: string = "https://www.googleapis.com/books/v1/volumes?q=";

  private bookList: Book[] = [];
  private wishList: Book[] = [];

  private booklistSubject$ = new BehaviorSubject(this.bookList);
  private wishlistSubject$ = new BehaviorSubject(this.wishList);

  wishes$ = this.wishlistSubject$.asObservable();
  books$ = this.booklistSubject$.asObservable();

  constructor(private http: HttpClient) { }

  getBooks(title: Book) {
    return this.http.get([this.baseUrl, title].join(''))
    .pipe(
      map((bookRes: any) => {
        const info = bookRes.items;
        this.bookList = [...info];
        this.booklistSubject$.next(this.bookList);
        return info;
      }),
    )
  }

  toWishlist(book: Book) {
    const addedBook = this.wishList.find(
      (ele) => ele.id === book.id
    );
    if (!addedBook) {
      this.wishList = [...this.wishList, book];
    }
    this.wishlistSubject$.next(this.wishList); 
  }

  fromWishlist(book: Book) {
    const deletedList = this.wishList.filter(
      (ele) => ele.id !== book.id
    );
    this.wishList = deletedList;
    this.wishlistSubject$.next(this.wishList);
  }

}
