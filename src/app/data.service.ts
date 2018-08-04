import { Injectable } from '@angular/core';



  const localApiUrl = 'http://localhost/FYP-API/';
  const hostedApiUrl = 'https://something.com';

@Injectable()
export class DataService {





  constructor() { }


  public getTest(): string {
    return 'foo';
  }

}
