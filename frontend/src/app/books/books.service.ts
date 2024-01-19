import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book} from 'src/app/books/book.dto';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  create(book: Book): Observable<Book>{
    return this.http.post<Book>( "/api/books", book).pipe()
  }

  update(id: number, book: Book): Observable<Book>{
    return this.http.put<Book>( "/api/books/"+ id, book).pipe()
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>("/api/books").pipe()
  }

  delete(id: Number){
    return this.http.delete("/api/books/" + id).pipe()
  }
}
