import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  results: Object[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //this.results.push(this.dataService.getResultWithId(10));
    console.log(this.dataService.getResultWithId(10));
  }

  addComp(): void {
    this.dataService.scheduleComparison('{"input_id":"1","parameters":{"foo":"bar"}}');
  }

}
