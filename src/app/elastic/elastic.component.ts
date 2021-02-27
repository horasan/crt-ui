import { Component, OnInit } from '@angular/core';
import { CRTErrorResponse } from '../error-handling-model/crt-error-response.model';
import { HandyInfo } from '../category-model/info-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-elastic',
  templateUrl: './elastic.component.html',
  styleUrls: ['./elastic.component.css']
})
export class ElasticComponent implements OnInit {

  public handyInfoListFromApi: Observable<HandyInfo[]>;
  private errorMessage: String = '';
  public errorResponse: CRTErrorResponse;
  public errorOccured: boolean = false;
  public showError: boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public onDeleteHandyInfo(handyInfoId: string) {
    console.log('in ElasticComponent.onDeleteHandyInfo(' + handyInfoId + ')');
    //this.editCategory = new Category(categoryId, categoryName, uiOrder);
    //this.showNewCategoryComponent = true;
  }

  onSearchForSingleWord(searchValue: string) {
    console.log(searchValue);

    this.errorMessage = '';
    this.http.get(environment.productApiEndPoint + '/singleword/' + searchValue + '/')
      .subscribe((res: any) => {
        this.handyInfoListFromApi = res;
        console.log('---->');
        console.log(this.handyInfoListFromApi);
        this.errorOccured = false;
      }, errorRes => {
        this.errorOccured = true;
        this.handyInfoListFromApi = null;

        this.errorResponse = errorRes.error;

        this.errorMessage = errorRes.message;

        if (errorRes.status == 404) {
          this.errorMessage = 'Record not found ';
        }
      });
    }

    onSearchForSuggestion(searchValue: string) {
      console.log(searchValue);
      
    this.errorMessage = '';
    this.http.get(environment.productApiEndPoint + '/sayt/' + searchValue + '/')
      .subscribe((res: any) => {
        this.handyInfoListFromApi = res;
        console.log('---->');
        console.log(this.handyInfoListFromApi);
        this.errorOccured = false;
      }, errorRes => {
        this.errorOccured = true;
        this.handyInfoListFromApi = null;

        this.errorResponse = errorRes.error;

        this.errorMessage = errorRes.message;

        if (errorRes.status == 404) {
          this.errorMessage = 'Record not found ';
        }
      });
    }
}
