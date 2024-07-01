import { Component, Input, OnInit } from '@angular/core';
import { Ipassenger } from '../../model/passenger.interface';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.scss']
})
export class PassengerListComponent implements OnInit {

 @Input() getPassengerList !: Ipassenger

  constructor() { }

  ngOnInit(): void {
    
  }

}
