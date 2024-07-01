import { Injectable, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService implements OnInit{

  

  constructor(
    private _snackbar : MatSnackBar
  ) { }

  ngOnInit(): void {
    
  }

  openSnackBar(msg: string){
    this._snackbar.open(msg , "close" , {
      duration : 2500,
      horizontalPosition : 'center',
      verticalPosition : 'top'
    })
  }

}
