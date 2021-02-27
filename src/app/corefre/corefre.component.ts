import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreFreMenuItem } from '../category-model/corefremenuitem-model';
import { CRTErrorResponse } from '../error-handling-model/crt-error-response.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-corefre',
  templateUrl: './corefre.component.html',
  styleUrls: ['./corefre.component.css']
})
export class CorefreComponent implements OnInit {

  public menuItemListFromApi: Observable<CoreFreMenuItem[]>;
  private errorMessage: String = '';
  public errorResponse: CRTErrorResponse;
  public errorOccured: boolean = false;
  public showError: boolean = false;
  public activeStatus: String = '';
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.getAllMenuItems();
  }

  onSearchForSuggestion(searchValue: string) {

    this.activeStatus = 'searching for all words:' + searchValue;
    

    if(!searchValue) {
      return this.getAllMenuItems();
    }

    console.log(searchValue);
    
  this.errorMessage = '';
  this.http.get(environment.coreFreMenuApiEndPoint + '/decription/' + searchValue + '/')
    .subscribe((res: any) => {
      this.menuItemListFromApi = res;
      console.log('---->');
      console.log(this.menuItemListFromApi);
      this.errorOccured = false;
    }, errorRes => {
      this.errorOccured = true;
      this.menuItemListFromApi = null;

      this.errorResponse = errorRes.error;

      this.errorMessage = errorRes.message;

      if (errorRes.status == 404) {
        this.errorMessage = 'Record not found ';
      }
    });
  }

  getAllMenuItems() {
    this.activeStatus = 'All menu items are listed.';
    
  this.errorMessage = '';
  this.http.get(environment.coreFreMenuApiEndPoint + '/')
    .subscribe((res: any) => {
      this.menuItemListFromApi = res;
      console.log('---->');
      console.log(this.menuItemListFromApi);
      this.errorOccured = false;
    }, errorRes => {
      this.errorOccured = true;
      this.menuItemListFromApi = null;

      this.errorResponse = errorRes.error;

      this.errorMessage = errorRes.message;

      if (errorRes.status == 404) {
        this.errorMessage = 'Record not found ';
      }
    });
  }
}
