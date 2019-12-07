import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompetitionResult } from '../competition-model/competition-result.model';
import { Competitor } from '../competition-model/competitor.model';
import { Observable } from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchName: string;

  public competitionResult: CompetitionResult[];
  //public competitionResultFromApi: CompetitionResult[];
  public competitionResultFromApi: Observable<CompetitionResult[]>;

  //courses$: Observable<Course[]>;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    





    /*this.http
            .get<Course[]>("/courses.json")
            .map(data => _.values(data))
            .do(console.log);*/
/*
    this.http.get('http://localhost:5000/competitionapi/v1/competition/ranking/1')
      .subscribe(responseData => console.log(responseData));
*/

    this.http.get('http://localhost:5000/competitionapi/v1/competition/ranking/1')
      .subscribe((res: any) => {
        this.competitionResultFromApi = res;
        console.log(this.competitionResultFromApi);
      }, err => {
        console.log(err);
      });
  }

  public onGetCompetitorInfo(event: any) {

    console.log(event);

    let competitor1 = new Competitor("id1", "name1");

    let competitionResult1 = new CompetitionResult(
      competitor1, 101, 1);

    let competitor2 = new Competitor("id2", "name2");
    let competitionResult2 = new CompetitionResult(
      competitor2, 202, 2);

     
      let competitor3 = new Competitor("id3", this.searchName);
    let competitionResult3 = new CompetitionResult(
      competitor3, 303, 3);

      
      console.log(this.searchName);
    this.competitionResult = new Array(competitionResult1, competitionResult2, competitionResult3);
  }

  onKey(event: any) { // without type info
    this.searchName = event.target.value;
  }

}
