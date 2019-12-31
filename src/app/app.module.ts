import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routing/routing-module';
import { CategoryComponent } from './category/category.component';
import { CategoryNewComponent } from './category-new/category-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FileUploadComponent,
    SearchComponent,
    CategoryComponent,
    CategoryNewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
