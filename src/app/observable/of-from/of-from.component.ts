import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  constructor(private designUtility: DesignUtilityService) { }
  ofObjectMessage;
  fromObjectMessage;

  ngOnInit() {

    const ofArray = of('Rupesh', 'Apoorv', 'Piyush', 'Bob');

    ofArray.subscribe(res => {
      this.designUtility.appendChild(res, 'elContainer');

    })

    const ofObject = of({ firstName: 'Rupesh', middleName: 'Kumar', lastName: 'Singh' });

    ofObject.subscribe(res => {
      this.ofObjectMessage=res;
      //this.designUtility.appendChild(res, 'elContainer2');
    })

    const fromArray = of('Rupesh', 'Apoorv', 'Piyush', 'Bob');

    fromArray.subscribe(res => {
      this.designUtility.appendChild(res, 'elContainer3');

    })

    const fromObject = of({ firstName: 'Apoorv', middleName: 'Kumar', lastName: 'Pandey' });

    fromObject.subscribe(res => {
      this.fromObjectMessage=res;
      //this.designUtility.appendChild(res, 'elContainer2');
    })


    const chocolatePromise = new Promise((accept,reject)=>{
      setTimeout(res => {
        accept("Promise is accepted");
      },3000);
    });

    const fromPromise=from(chocolatePromise);
    fromPromise.subscribe(res => {
      this.designUtility.appendChild(res, 'elContainer5');
    })

    const fromString=from("I am string promise");
    fromString.subscribe(res => {
      this.designUtility.appendChild(res, 'elContainer6');
    })

  }

}
