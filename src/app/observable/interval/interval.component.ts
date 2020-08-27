import { Component, OnInit } from '@angular/core';
import {interval, Subscription,timer} from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  obsMessage;
  videoSubscription: Subscription;
  constructor(private _designUtility:DesignUtilityService) { }

  ngOnInit() {

   // const broadCastVideos=interval(2000);
   const broadCastVideos=timer(1000,2000);

   this.videoSubscription= broadCastVideos.subscribe( res => {
        console.log(res);
        this.obsMessage="Video "+res;
        this._designUtility.appendChild( this.obsMessage,"elContainer");
        this._designUtility.appendChild( this.obsMessage,"elContainer2");
        this._designUtility.appendChild( this.obsMessage,"elContainer3");
        if(res >=5){
          this.videoSubscription.unsubscribe();
        }
    }

    )
  }

}
