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
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ElasticComponent } from './elastic/elastic.component';
import { CorefreComponent } from './corefre/corefre.component';
import { AaMenuComponent } from './aa-menu/aa-menu.component';
import { AaMenuListComponent } from './aa-menu-list/aa-menu-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FileUploadComponent,
    SearchComponent,
    CategoryComponent,
    CategoryNewComponent,
    AuthenticationComponent,
    ElasticComponent,
    CorefreComponent,
    AaMenuComponent,
    AaMenuListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
