import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';


  const localApiUrl = 'http://localhost/FYP-API/api.php';
  const hostedApiUrl = 'https://something.com/api.php';

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class DataService {


  apiMode = 0;

  testVal: string;

  private



  constructor(private http: HttpClient) { }


  public setAPIMode(mode) {
    switch (mode) {
      case 0:
        this.apiMode = 0;
      break;
      case 1:
        this.apiMode = 1;
      break;
      default:
      // do nothing
    }
    console.log(this.getAPIUrl());
  }

  public getAPIMode(): number {
    return this.apiMode;
  }

  public getAPIUrl(): string {
    if (this.apiMode == 0) {
      return localApiUrl;
    } else {
      return hostedApiUrl;
    }
  }


  public getAccountId(): number {
    return 1; //TODO implement this
  }

  /***** API query functions *****/

  public getResultWithId(id): any {

  this.http.get(this.getAPIUrl() + '/comparison/' + id).subscribe(data => {
   console.log(data);
    return data;
  });
  return null;
  }

  public scheduleComparison(input): number {
    console.log('schedule');
    this.http.post(this.getAPIUrl() + '/comparison/', input, httpOptions);
    return 5;
  }


  public storeNewInputDataSet(accountId, data): void {

    // Send the post request
    const req = this.http.post(this.getAPIUrl() + '/upload/', {
     account: accountId,
     data: data
   },httpOptions)
     .subscribe( // Get the response
       res => {
         console.log(res);
       },
       err => { // Display errors
         console.log("Error occured");
       }
     );
  }

  public getAllInputSets(): string[] {

      this.http.get<string[]>(this.getAPIUrl() + '/upload/').subscribe(data => {
        this.testVal = data;
      });
      return this.testVal;
  }

}
