import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private designUtility:DesignUtilityService) {

   }

  ngOnInit() {

    let studentsObservable=from([
      { firstName: 'Rupesh', lastName: 'Kumar',gender:'male', address: { city: 'patna', state: 'br' } },
      { firstName: 'Tulsi', lastName: 'Khan',gender:'male', address: { city: 'bhagalpur', state: 'br' } },
      { firstName: 'Irfan', lastName: 'Pandit',gender:'male', address: { city: 'ranchi', state: 'jh' } },
      { firstName: 'Sachin', lastName: 'Geourge',gender:'male', address: { city: 'pune', state: 'mh' } },
      { firstName: 'Eric', lastName: 'Ramdas',gender:'female', address: { city: 'pasighat', state: 'a.p' } },
      { firstName: 'Apoorv', lastName: 'Pandey',gender:'female', address: { city: 'gwalior', state: 'm.p' } }
    ]);

//    let studentsObservable=from(this.designUtility.getStudents());

    studentsObservable
    .pipe(
      filter(data => data.gender == 'male'),
      map(data => data.firstName)
      )
    .subscribe(data => {
      console.log(data);
      this.designUtility.appendChild(data,"elContainer");
    })



  }

}
