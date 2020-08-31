import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { from, Subscription } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  subscribe1: Subscription;
  subscribe2: Subscription;
  subscribe3: Subscription;
  constructor(private designUtility: DesignUtilityService) { }

  ngOnInit() {

    const numberArray = ['1', '2', '3', '4', '5', '6'];

    const numberArrayStream = from(numberArray);

    this.subscribe1 = numberArrayStream.subscribe(data => {
      this.designUtility.appendChild(data, "elContainer");
    })

    this.subscribe1.unsubscribe;

    this.subscribe2 = numberArrayStream.subscribe(data => {
      //number numberTemp=10;
      this.designUtility.appendChild(data, "elContainer2");
    })

    this.subscribe2.unsubscribe;


    const students = [
      { firstName: 'Rupesh', lastName: 'Kumar', address: { city: 'patna', state: 'br' } },
      { firstName: 'Tulsi', lastName: 'Khan', address: { city: 'bhagalpur', state: 'br' } },
      { firstName: 'Irfan', lastName: 'Pandit', address: { city: 'ranchi', state: 'jh' } },
      { firstName: 'Sachin', lastName: 'Geourge', address: { city: 'pune', state: 'mh' } },
      { firstName: 'Eric', lastName: 'Ramdas', address: { city: 'pasighat', state: 'a.p' } },
      { firstName: 'Apoorv', lastName: 'Pandey', address: { city: 'gwalior', state: 'm.p' } }
    ];


    const studentsStream = from(students);
    this.subscribe3 = studentsStream
      .pipe(map(data => data.firstName))
      .subscribe(reponse => {
        this.designUtility.appendChild(reponse, "elContainer3");
      })
    this.subscribe3.unsubscribe;
    this.subscribe3 = studentsStream
      //.pipe(map(data => data.address.city) ) //it also works
      .pipe(pluck('address', 'city'))
      .subscribe(reponse => {
        this.designUtility.appendChild(reponse, "elContainer4");
      })
    this.subscribe3.unsubscribe;
  }

}
