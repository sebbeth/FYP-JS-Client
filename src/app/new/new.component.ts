import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { InputSet } from '../data-structures/InputSet';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private dataService: DataService) { }

  textFieldContent = '{"example":"input"}';

  inputSets: InputSet[];

  ngOnInit() {
    this.inputSets = this.dataService.getAllInputSets();

  }


  public uploadDataSet(): void {
    if (this.textFieldContent === '') {
      return null;
    }
    let data = JSON.parse(this.textFieldContent);
    this.dataService.storeNewInputDataSet(1,data);
  }

}
