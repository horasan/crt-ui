import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MenuItem } from '../category-model/menu-item-model';

@Component({
  selector: 'app-aa-menu',
  templateUrl: './aa-menu.component.html',
  styleUrls: ['./aa-menu.component.css']
})

export class AaMenuComponent implements OnInit {

  private jsonMenu: String;
  private newMenuItem: MenuItem;
  private newTags: String[];

  // Menu item properties
  private newMenuItemName: String = '';
  private newMenuItemPath: String = '';
  private newMenuItemTags: String = '';
  private newMenuItemDescription: String = '';
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.jsonMenu= "";
  }

  public onSaveMenu() {
    this.newMenuItem = new MenuItem("", this.newMenuItemName, this.newMenuItemPath, this.newMenuItemTags, this.newMenuItemDescription);
    if (this.newMenuItemName != "") {
      console.log(this.jsonMenu);
      // save new
      /*
      public id: String;
    public name: String;
    public path: String;
    public tags: String;
    public description: String;
      */
     console.log(this.newMenuItem);

      this.httpClient.post(environment.kafkaApiEndPoint + '/menu', {
        "name": this.newMenuItem.name,
        "path": this.newMenuItem.path,
        "tags": this.newMenuItem.tags,
        "description": this.newMenuItem.description
      })
        .subscribe(res => {

          //this.categorySaveResult = "Category saved successfully!";
          alert('Menu saved successfully!');
          //this.categoryComponent.closeNewCategoryComponent();
        }, errorRes => {

          //this.categorySaveResult = errorRes.error.message;
          //alert(errorRes.error.message);
          alert("Error while calling environment.kafkaApiEndPoint + '/menu'");
        }
        )
    }
    else {
      alert("menu object is empty!");
    }

  }

  public onClearScreen(event: any) {
    this.jsonMenu = "";
  }
  

}
