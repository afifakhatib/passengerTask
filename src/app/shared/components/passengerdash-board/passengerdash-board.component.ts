import { Component, OnInit } from '@angular/core';
import { Ipassenger } from '../../model/passenger.interface';
import { passengerArr } from '../../const/passengerData';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-passengerdash-board',
  templateUrl: './passengerdash-board.component.html',
  styleUrls: ['./passengerdash-board.component.scss']
})
export class PassengerdashBoardComponent implements OnInit {

passengerData : Array<Ipassenger> = passengerArr

checkedInArr !: Array<Ipassenger>
 

  constructor(
    private _snackBarService: SnackbarService
  ) { }

  ngOnInit(): void {
    this._snackBarService.openSnackBar(`Fetched Passenger Data`)
    this.checkedInArr = this.passengerData.filter(obj => obj.CheckedInStatus === true)
  }

  onEmitRemovePass(data : Ipassenger){
    let confirmation =  confirm(`Do you want to remove passenger Card of ${data.Pname} Passenger!!`)
    let getIndexOf = this.passengerData.findIndex(find => find.id === data.id)
    this.passengerData.splice(getIndexOf , 1)

    if(data.CheckedInStatus === true){
      let getIndexOfCheckedArr = this.passengerData
      .findIndex(obj => obj.id === data.id)
      this.checkedInArr.splice(getIndexOf , 1)
    }
    this._snackBarService.openSnackBar(`Passenger Card of ${data.Pname} is removed successfully!!`)
  }

}
