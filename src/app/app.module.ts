import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { PullOutCellComponent } from './pull-out-cell/pull-out-cell.component';
import { Cellver1Component } from './pull-out-cell/cellver1/cellver1.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    PullOutCellComponent,
    Cellver1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
