import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompetitionResult } from '../competition-model/competition-result.model';
import { Competitor } from '../competition-model/competitor.model';
import { Observable } from "rxjs";
import { CRTErrorResponse } from '../error-handling-model/crt-error-response.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchName: string;
  public errorMessage: string = '';
  public errorResponse: CRTErrorResponse;
  public errorOccured: boolean = false;
  public showError: boolean = false;

  public competitionResultFromApi: Observable<CompetitionResult[]>;


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public onShowErrorChange(event: any) {
    this.showError = !this.showError;
  }

  public onGetCompetitorInfo(event: any) {
    this.errorMessage = '';
    this.http.get('http://localhost:5000/competitorapi/v1/competitor/name/' + this.searchName)
      .subscribe((res: any) => {
        this.competitionResultFromApi = res;
        console.log(this.competitionResultFromApi);
        this.errorOccured = false;
      }, errorRes => {
        this.errorOccured = true;
        this.competitionResultFromApi = null;

        this.errorResponse = errorRes.error;

        this.errorMessage = errorRes.message;

        if (errorRes.status == 404) {
          this.errorMessage = 'Record not found for ' + this.searchName;
        }
      });

  }

  onSearchNameKey(event: any) {
    this.searchName = event.target.value;
  }

}
