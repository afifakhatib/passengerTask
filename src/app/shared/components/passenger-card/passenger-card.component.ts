import { Component, ElementRef, EnvironmentInjector, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ipassenger } from '../../model/passenger.interface';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss']
})
export class PassengerCardComponent implements OnInit {

  @Input() getPassengerCard !: Ipassenger

  @Output() getEmitCard : EventEmitter<Ipassenger> = new  EventEmitter<Ipassenger>();

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('inputRef') inputRef !: ElementRef;
  @ViewChild('EditRef') EditRef !: ElementRef;
  @ViewChild('UpdateRef') UpdateRef !: ElementRef;
  @ViewChild('RemoveRef') RemoveRef !: ElementRef;


  onPassEdit(){
    this.inputRef.nativeElement.removeAttribute('disabled');
    this.EditRef.nativeElement.style.display = 'none';
    this.UpdateRef.nativeElement.style.display = 'inline-block'
  }

  onPassUpdate(){
    // let InputVal = this.inputRef.nativeElement as HTMLInputElement
    // let val = InputVal.value as string
    let InputVal = (this.inputRef.nativeElement as HTMLInputElement).value as string;
    this.getPassengerCard.Pname = InputVal;
    this.inputRef.nativeElement.style.backgroundColor = 'transparent';
    this.inputRef.nativeElement.style.border = '#fff';
    this.UpdateRef.nativeElement.style.display = 'none';
    this.EditRef.nativeElement.style.display = 'inline-block'
  }

  onPassRemove(){
     this.getEmitCard.emit(this.getPassengerCard)
  }

}
