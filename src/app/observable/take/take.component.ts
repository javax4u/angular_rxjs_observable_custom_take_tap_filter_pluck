import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { from, interval, fromEvent } from 'rxjs';
import { take, map, takeLast, skip, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  constructor(private designUtility: DesignUtilityService) { }

  ngOnInit() {

    let studentsArray = from(this.designUtility.getStudents());

    studentsArray
      .pipe(map(data => data.firstName + ' , ' + data.lastName))
      .subscribe(data => {
        this.designUtility.appendChild(data, 'elContainer');
      });

    studentsArray
      .pipe(take(3), map(data => data.firstName + ' , ' + data.lastName))
      .subscribe(data => {
        this.designUtility.appendChild(data, 'elContainer2');
      });


    studentsArray
      .pipe(takeLast(3), map(data => data.firstName + ' , ' + data.lastName))
      .subscribe(data => {
        this.designUtility.appendChild(data, 'elContainer3');
      });


    studentsArray
    .pipe(skip(1), map(data => data.firstName + ' , ' + data.lastName))
    .subscribe(data => {
      this.designUtility.appendChild(data, 'elContainer4');
    });


    let intervalObservable=interval(1000);
    let clickEventObservable = fromEvent(document, 'click');
    intervalObservable
      .pipe(takeUntil(clickEventObservable))
      .subscribe(data => {
        this.designUtility.appendChild(data, 'elContainer5');
      });




  }

}
