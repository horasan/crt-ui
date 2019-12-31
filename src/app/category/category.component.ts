import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../category-model/category-model';
import { HttpClient } from '@angular/common/http';
import { CRTErrorResponse } from '../error-handling-model/crt-error-response.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categoryListFromApi: Observable<Category[]>;
  private errorMessage: String = '';
  public errorResponse: CRTErrorResponse;
  public errorOccured: boolean = false;
  public showError: boolean = false;
  public showNewCategoryComponent: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.onGetCategories();
  }

public closeNewCategoryComponent() {
  this.showNewCategoryComponent = false;
}

  public onGetCategories() {
    this.errorMessage = '';
    this.http.get(environment.productApiEndPoint + '/category')
      .subscribe((res: any) => {
        this.categoryListFromApi = res;
        console.log(this.categoryListFromApi);
        this.errorOccured = false;
      }, errorRes => {
        this.errorOccured = true;
        this.categoryListFromApi = null;

        this.errorResponse = errorRes.error;

        this.errorMessage = errorRes.message;

        if (errorRes.status == 404) {
          this.errorMessage = 'Record not found ';
        }
      });

  }

  public onShowNewCategoryComponent(event: any) {
    this.showNewCategoryComponent = true;
  }

}
