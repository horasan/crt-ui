import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryComponent } from '../category/category.component';
import { environment } from 'src/environments/environment';
import { Category } from '../category-model/category-model';


@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css']
})
export class CategoryNewComponent implements OnInit {

  private categoryName: String = '';
  private categoryOrder: number = 1;
  private categorySaveResult: String = '';

  private existingCategory: Category;

  constructor(private http: HttpClient, private categoryComponent: CategoryComponent) { }

  ngOnInit() {
    this.existingCategory = this.categoryComponent.editCategory;
  }

  public onKeyUpCategoryName(event: any) {
    this.categoryName = event.target.value;
  }

  public onKeyUpCategoryOrder(event: any) {
    this.categoryOrder = event.target.value;
  }

  public onCancelNewCategory(event: any) {
    this.categoryComponent.closeNewCategoryComponent();
  }

  public onSaveNewCategory(event: any) {

    if (this.existingCategory == null) {
      // save new
      this.http.post(environment.productApiEndPoint + '/category', {
        "name": this.categoryName,
        "uiOrder": this.categoryOrder
      })
        .subscribe(res => {

          this.categorySaveResult = "Category saved successfully!";
          alert('Category saved successfully!');
          this.categoryComponent.closeNewCategoryComponent();
        }, errorRes => {

          this.categorySaveResult = errorRes.error.message;
          alert(errorRes.error.message);
        }
        )
    }
    else {
      // update existing api
      this.http.put(environment.productApiEndPoint + '/category/' + this.existingCategory.id, {
        "name": this.categoryName,
        "uiOrder": this.categoryOrder
      })
        .subscribe(res => {

          this.categorySaveResult = "Category saved successfully!";
          alert('Category saved successfully!');
          this.categoryComponent.closeNewCategoryComponent();
        }, errorRes => {

          this.categorySaveResult = errorRes.error.message;
          alert(errorRes.error.message);
        }
        )

    }



  }

}
