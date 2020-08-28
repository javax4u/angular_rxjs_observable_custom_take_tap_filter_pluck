import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {


  constructor() { }

  getStudents() {
    return [
      { firstName: 'Rupesh', lastName: 'Kumar', address: { city: 'patna', state: 'br' } },
      { firstName: 'Tulsi', lastName: 'Khan', address: { city: 'bhagalpur', state: 'br' } },
      { firstName: 'Irfan', lastName: 'Pandit', address: { city: 'ranchi', state: 'jh' } },
      { firstName: 'Sachin', lastName: 'Geourge', address: { city: 'pune', state: 'mh' } },
      { firstName: 'Eric', lastName: 'Ramdas', address: { city: 'pasighat', state: 'a.p' } },
      { firstName: 'Apoorv', lastName: 'Pandey', address: { city: 'gwalior', state: 'm.p' } }
    ];
  }
  appendChild(innerTextParam, ulId) {
    let li = document.createElement('li');
    li.innerText = innerTextParam;
    let ul = document.getElementById(ulId);
    ul.appendChild(li);
  }
}
