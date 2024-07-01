import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PassengerdashBoardComponent } from './shared/components/passengerdash-board/passengerdash-board.component';
import { PassengerListComponent } from './shared/components/passenger-list/passenger-list.component';
import { PassengerCardComponent } from './shared/components/passenger-card/passenger-card.component';



@NgModule({
  declarations: [
    AppComponent,
    PassengerdashBoardComponent,
    PassengerListComponent,
    PassengerCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
