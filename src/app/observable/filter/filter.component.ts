import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { from } from 'rxjs';
import { filter, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private designUtility: DesignUtilityService) {

  }

  ngOnInit() {

    let studentsObservable = from([
      { firstName: 'Rupesh', lastName: 'Kumar', gender: 'male', address: { city: 'patna', state: 'br' } },
      { firstName: 'Tulsi', lastName: 'Khan', gender: 'male', address: { city: 'bhagalpur', state: 'br' } },
      { firstName: 'Irfan', lastName: 'Pandit', gender: 'male', address: { city: 'ranchi', state: 'jh' } },
      { firstName: 'Sachin', lastName: 'Geourge', gender: 'male', address: { city: 'pune', state: 'mh' } },
      { firstName: 'Eric', lastName: 'Ramdas', gender: 'male', address: { city: 'pasighat', state: 'a.p' } },
      { firstName: 'Apoorv', lastName: 'Pandey', gender: 'male', address: { city: 'gwalior', state: 'm.p' } },
      { firstName: 'Swati', lastName: 'Sinha', gender: 'female', address: { city: 'gwalior', state: 'm.p' } },
      { firstName: 'Sri Devi', lastName: 'Kapoor', gender: 'female', address: { city: 'gwalior', state: 'm.p' } }
    ]);

    //    let studentsObservable=from(this.designUtility.getStudents());

    studentsObservable
      .pipe(
        filter(data => data.gender == 'male'),
        map(data => data.firstName + ' ' + data.lastName)
      )
      .subscribe(data => {
        console.log(data);
        this.designUtility.appendChild(data, "elContainer");
      })
      studentsObservable
      .pipe(
        filter(data => data.gender == 'female'),
        map(data => data.firstName + ' ' + data.lastName)
      )
      .subscribe(data => {
        console.log(data);
        this.designUtility.appendChild(data, "elContainer2");
      })

      studentsObservable
      .pipe(
        filter(data => data.firstName.length >= 5),
        map(data => data.firstName + ' ' + data.lastName)
      )
      .subscribe(data => {
        console.log(data);
        this.designUtility.appendChild(data, "elContainer3");
      })


      studentsObservable
      .pipe(
        map(data => data.firstName + ' ' + data.lastName),
        tap(data => console.log(data))
      )
      .subscribe(data => {
        console.log(data);
        this.designUtility.appendChild(data, "elContainer4");
      })




  }

}
