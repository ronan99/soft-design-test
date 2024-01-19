import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogRef,

} from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { Book } from 'src/app/books/book.dto';
import { BooksService } from 'src/app/books/books.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatGridListModule
  ],
})
export class ModalCreateComponent {

  formBook: FormGroup = new FormGroup({
    title: new FormControl<string>('',[Validators.required]),
    description: new FormControl<string>('', [Validators.required]),
    author: new FormControl<string>('', [Validators.required]),
    pages: new FormControl<number>(0, [Validators.required]),
  });

  constructor(
    public dialogRef: MatDialogRef<ModalCreateComponent>,
    private bookService: BooksService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  createBook(){
    const data = this.formBook.value as Book
    this.bookService.create(data).subscribe({
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

