import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing} from "./app.routes";
import {DocumentsModule} from "./documents/documents.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //own
    routing,
    DocumentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
