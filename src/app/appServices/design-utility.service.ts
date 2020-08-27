import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  appendChild(innerTextParam,ulId){
    let li=document.createElement('li');
    li.innerText=innerTextParam;
    let ul=document.getElementById(ulId);
    ul.appendChild(li);
  }
}
