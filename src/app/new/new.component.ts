import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }


  public uploadDataSet(): void {
    let data = {
      test:'test'
    };
    this.dataService.storeNewInputDataSet(1,data);
  }

}
