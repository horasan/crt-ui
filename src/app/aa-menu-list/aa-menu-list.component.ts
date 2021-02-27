import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MenuItem } from '../category-model/menu-item-model';
import { CRTErrorResponse } from '../error-handling-model/crt-error-response.model';

@Component({
  selector: 'app-aa-menu-list',
  templateUrl: './aa-menu-list.component.html',
  styleUrls: ['./aa-menu-list.component.css']
})
export class AaMenuListComponent implements OnInit {

  public errorOccured: boolean = false;
  public showError: boolean = false;
  public errorResponse: CRTErrorResponse;
  private errorMessage: String = '';
  private menuItemSearchValue: String = '';
  private currentOperation: String = '';
  private numberOfRecords: String = '';
  public menuItemList: Observable<MenuItem[]>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMenuItemList();
  }

  public getMenuItemList() {
    console.log("getMenuItemList start");
    this.http.get(environment.kafkaApiEndPoint + '/menu')
      .subscribe((res: any) => {
        this.menuItemList = res;
        console.log(this.menuItemList);
        this.errorOccured = false;
      }, errorRes => {
        this.errorOccured = true;
        this.menuItemList = null;

        this.errorResponse = errorRes.error;

        this.errorMessage = errorRes.message;
        console.log(errorRes);
        if (errorRes.status == 404) {
          this.errorMessage = 'Record not found ';
        }
      });

  }

  public onSearchForMenuItemSuggestion(searchValue: string) {
    console.log("suggestion search started: " + searchValue);
    this.currentOperation = "Searching ...";

    this.http.get(environment.kafkaApiEndPoint + '/menu')
      .subscribe((res: any) => {
        this.menuItemList = res;
        console.log(this.menuItemList);
        this.errorOccured = false;
        this.currentOperation = "Found";
        //this.menuItemList.subscribe(result => {console.log(result.length)});
      }, errorRes => {
        this.currentOperation = "";
        this.numberOfRecords = "";

        this.errorOccured = true;
        this.menuItemList = null;

        this.errorResponse = errorRes.error;

        this.errorMessage = errorRes.message;
        console.log(errorRes);
        if (errorRes.status == 404) {
          this.errorMessage = 'Record not found ';
          
        }
      });
  }

}
