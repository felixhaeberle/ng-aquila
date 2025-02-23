import { Component, ViewChild } from '@angular/core';
import { Moment } from 'moment';
import { NxDatepickerComponent } from '@aposin/ng-aquila/datefield';

/**
* @title Date range example
*/
@Component({
  selector: 'datefield-range-example',
  templateUrl: './datefield-range-example.html',
  styleUrls: ['./datefield-range-example.css']
})

export class DatefieldRangeExampleComponent {

  @ViewChild('endDatepicker', { static: true }) endDatepicker!: NxDatepickerComponent<Moment>;

  startDate: Moment | null = null;
  endDate: Moment | null = null;

  updateEndDatepicker() {
    this.endDate = this.startDate;
    setTimeout(() => this.endDatepicker.open());
  }
}
