import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropzoneComponent } from './components/dropzone/dropzone.component';
import { DropzoneDirective } from './directives/dropzone.directive';

@NgModule({
  declarations: [
    AppComponent,
    DropzoneComponent,
    DropzoneDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
