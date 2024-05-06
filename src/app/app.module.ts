import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { FormularyComponent } from './formulary/formulary.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularyComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
