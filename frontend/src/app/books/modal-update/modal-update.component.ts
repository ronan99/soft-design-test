import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Book, BookUpdate } from 'src/app/books/book.dto';
import { BooksService } from 'src/app/books/books.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.css']
})
export class ModalUpdateComponent {
  formBook: FormGroup = new FormGroup({
    title: new FormControl<string>(this.book.title,[Validators.required]),
    description: new FormControl<string>(this.book.description, [Validators.required]),
    author: new FormControl<string>(this.book.author, [Validators.required]),
    pages: new FormControl<number>(this.book.pages, [Validators.required]),
  });

  constructor(
    public dialogRef: MatDialogRef<ModalUpdateComponent>,
    private bookService: BooksService,
    @Inject(MAT_DIALOG_DATA) public book: BookUpdate
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateBook(){
    const data = this.formBook.value as Book
    this.bookService.update(this.book.id, data).subscribe({
      next: (res) => {
        this.dialogRef.close(res);
      },
      error: (e) => {
        if(e.status == 422){
          alert("Erro na validação de dados")
          return;
        }
        alert("Um erro ocorreu ao tentar criar o registro")

      }
    });
  }
}
