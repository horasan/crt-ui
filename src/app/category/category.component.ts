import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../category-model/category-model';
import { HttpClient } from '@angular/common/http';
import { CRTErrorResponse } from '../error-handling-model/crt-error-response.model';
import { environment } from 'src/environments/environment';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { HandyInfo } from '../category-model/info-model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categoryListFromApi: Observable<Category[]>;
  public showNewCategoryComponent: boolean = false;
  public editCategory: Category;

  public handyInfoListFromApi: Observable<HandyInfo[]>;
  private errorMessage: String = '';
  public errorResponse: CRTErrorResponse;
  public errorOccured: boolean = false;
  public showError: boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.onGetCategories();
  }

public closeNewCategoryComponent() {
  this.showNewCategoryComponent = false;
}

  public onGetCategories() {
    this.errorMessage = '';
    this.http.get(environment.productApiEndPoint + '/sayt/3/')
      .subscribe((res: any) => {
        this.handyInfoListFromApi = res;
        console.log(this.handyInfoListFromApi);
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
    this.editCategory = null;
    this.showNewCategoryComponent = true;
  }

  public onEditCategoryComponent(categoryId: number, categoryName: String, uiOrder: number) {
    
    this.editCategory = new Category(categoryId, categoryName, uiOrder);
    this.showNewCategoryComponent = true;
  }

  searchDepartmentsWithName(searchValue: string) {
    console.log(searchValue);

    this.errorMessage = '';
    this.http.get(environment.productApiEndPoint + '/sayt/' + searchValue + '/')
      .subscribe((res: any) => {
        this.handyInfoListFromApi = res;
        console.log(this.handyInfoListFromApi);
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




    /*
    this.serverService.searchDepartment(departmentName).subscribe( (response) => {
        console.log(response);
      },
      (error) => console.log(error)
    );
    this.prepareSearchResults();
    */
    }
}
