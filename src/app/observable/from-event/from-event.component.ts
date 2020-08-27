import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit,AfterViewInit {

  constructor(private _designUtility:DesignUtilityService) { }

  @ViewChild('addBtn') addBtn:ElementRef;

  ngOnInit() {

  }
  ngAfterViewInit(){
    let count=1;
    fromEvent(this.addBtn.nativeElement,'click').subscribe(
      res =>
      {
        let val="video "+count++;
      console.log(val);
      this._designUtility.appendChild(val,"elContainer");
      this._designUtility.appendChild(val,"elContainer2");

    }
    )
  }




}
