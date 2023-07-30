import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, Observable} from 'rxjs';
import { Book } from '../books.interface';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {
  @ViewChild('booksearch') booksearch!: ElementRef;

  books$!: Observable<Book[]>;

  constructor(public booksService: BooksService) { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    fromEvent(this.booksearch.nativeElement, 'keyup').pipe(
      debounceTime(1000),
    )
      .subscribe((res: any) => {
        console.log(res.target.value);
        this.booksService.getBooks(res.target.value).subscribe(data => console.log(data));
        this.books$ = this.booksService.books$;
      });
  }

  addToWishlist(book: Book) {
    this.booksService.toWishlist(book);
  }

}
