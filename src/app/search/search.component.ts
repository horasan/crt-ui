import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    /*this.http
            .get<Course[]>("/courses.json")
            .map(data => _.values(data))
            .do(console.log);*/

            this.http.get('http://localhost:5000/competitionapi/v1/competition/ranking/1')
            .subscribe(responseData => console.log(responseData));
  }

}
