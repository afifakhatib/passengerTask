import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Ipassenger } from './shared/model/passenger.interface';
import { SnackbarService } from './shared/services/snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'passengerTask';

//  passengerArr : Array<Ipassenger> = [
//   {
//     Pname : 'Stephen',
//     CheckedIndate : 1490796642000,
//     CheckedInStatus : true,
//     Childern : 2 ,
//     id : '1231',
//   },
//   {
//     Pname : 'Rose',
//     CheckedIndate : null,
//     CheckedInStatus : false,
//     Childern : 0,
//     id : '1232',
//   },
//   {
//     Pname : 'James',
//     CheckedIndate : 1496067042000,
//     CheckedInStatus : true,
//     Childern : 1,
//     id : '1233',
//   },
//   {
//     Pname : 'Louies',
//     CheckedIndate : null,
//     CheckedInStatus : false,
//     Childern : 0,
//     id : '1234',
//   },
//   {
//     Pname : 'Tina',
//     CheckedIndate :  1527603042000,
//     CheckedInStatus : true,
//     Childern : 2 ,
//     id : '1235',
//   }
//  ] 

//  checkedInArr !: Array<Ipassenger>
 
 constructor(
  // private _snackBarService : SnackbarService
 ){

 }

//  @ViewChild('InputControl') InputControl !: HTMLInputElement
//  @ViewChild('inputRef') inputRef !: ElementRef
//  @ViewChild('onEditRef') onEditRef !: ElementRef
//  @ViewChild('onUpdateRef')  onUpdateRef !: ElementRef
 
  ngOnInit(): void {
    // this._snackBarService.openSnackBar(`Fetched Passenger Data`)
    // this.checkedInArr = this.passengerArr.filter(obj => obj.CheckedInStatus === true)
  }


  OnPassengerEdit(){
  //  this.inputRef.nativeElement.removeAttribute('disabled');
  //   // console.log(this.onEditRef.nativeElement);
  //   this.onEditRef.nativeElement.style.display = 'none'
  //   this.onUpdateRef.nativeElement.style.display = 'inline-block'
  }

  onUpdatePassenger(){
    // let InputControl = this.inputRef.nativeElement as HTMLInputElement
    // console.log(InputControl)
    // let val = InputControl.value as string
    // InputControl.value = val
    // this.passengerArr = val
    // console.log(val)
  }
}
