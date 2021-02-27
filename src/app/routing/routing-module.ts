import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { SearchComponent } from '../search/search.component';
import { CategoryComponent } from '../category/category.component';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { ElasticComponent } from '../elastic/elastic.component';
import { CorefreComponent } from '../corefre/corefre.component';
import { AaMenuComponent } from '../aa-menu/aa-menu.component';
import { AaMenuListComponent } from '../aa-menu-list/aa-menu-list.component';

const appRoutes: Routes = [
    {path:'', redirectTo: 'fileupload', pathMatch: 'full'},
    {path: 'fileupload', component: FileUploadComponent},
    {path: 'search', component: SearchComponent},
    {path: 'category', component: CategoryComponent},
    {path: 'auth', component: AuthenticationComponent},
    {path: 'elastic', component: ElasticComponent},
    {path: 'corefremenu', component: CorefreComponent},
    {path: 'menu', component: AaMenuComponent},
    {path: 'list-menu', component: AaMenuListComponent}
    

  ];

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  
  }