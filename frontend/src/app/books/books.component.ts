import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { Book } from 'src/app/books/book.dto';
import { BooksService } from 'src/app/books/books.service';
import {
  MatDialog,
} from '@angular/material/dialog';
import { ModalCreateComponent } from 'src/app/books/modal-create/modal-create.component';
import { ModalUpdateComponent } from 'src/app/books/modal-update/modal-update.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],

})
export class BooksComponent {
  displayedColumns: string[] = ['id', 'title', 'author', 'pages', 'actions'];
  dataSource!: MatTableDataSource<Book>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private bookService: BooksService, private router: Router, public dialog: MatDialog){
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.fetchBooks()
    this.dataSource.paginator = this.paginator;
   }

   fetchBooks(){
    this.bookService.getAll().subscribe(
      {
        next: (res) => {
          console.log(res)
          this.dataSource.data = res
          this.dataSource.filterPredicate = (data: Book, filter: string): boolean => {
            return (
              data.title.toLocaleLowerCase().includes(filter) || data.author.toLocaleLowerCase().includes(filter)
            )
          }

        },
        error: (e) => {
          if(e.error.name == "Unauthorized"){
            this.router.navigateByUrl("/")
            return;
          }
          alert(e)
        }
      });
   }

  filter(e : any) {
    console.log(this.dataSource)
    const filter = (e.target as HTMLInputElement).value.trim().toLocaleLowerCase();
    this.dataSource.filter = filter;
  }

  deleteBook(id: number){

    if(confirm("Tem certeza que deseja deletar o registro?")){
      this.bookService.delete(id).subscribe(
        {
          next: (res) => {
            const index = this.dataSource.data.findIndex((item) => item.id == id )
            this.dataSource.data.splice(index, 1);
            this.dataSource._updateChangeSubscription();
          },
          error: (e) => {
            if(e.error.name == "Unauthorized"){
              this.router.navigateByUrl("/")
              return;
            }
            alert(e)
          }
        }
      )
    }
  }

  openUpdateBookDialog(data: Book){
    const dialogRef = this.dialog.open(ModalUpdateComponent, {
      minWidth: "300px",
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        let rep = this.dataSource.data.findIndex( x => x.id == result.id)
        if(rep !== -1) this.dataSource.data[rep] = result;
        this.dataSource._updateChangeSubscription();
      }

    });
  }

  openCreateBookDialog(): void {
    const dialogRef = this.dialog.open(ModalCreateComponent, {
      minWidth: "300px",

    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.dataSource.data.push(result as Book)
        this.dataSource._updateChangeSubscription();
      }

    });
  }

}
