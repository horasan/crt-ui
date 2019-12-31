import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryComponent } from '../category/category.component';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css']
})
export class CategoryNewComponent implements OnInit {

  private categoryName: String = '';
  private categoryOrder: number = 1;
  private categorySaveResult: String = '';

  constructor(private http: HttpClient, private categoryComponent: CategoryComponent) { }

  ngOnInit() {
  }

  public onKeyUpCategoryName(event: any) {
    this.categoryName = event.target.value;
  }

  public onKeyUpCategoryOrder(event: any) {
    this.categoryOrder = event.target.value;
  }

  public onSaveNewCategory(event: any) {
    //alert(this.categoryName + '-' + this.categoryOrder);
    //Call save api

    
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

}
