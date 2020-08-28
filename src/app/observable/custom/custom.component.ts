import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable,  Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit,OnDestroy {


  constructor(private designUtility:DesignUtilityService) { }

   techStatus;techStatus2;
   subscription2=Subscription;
  ngOnInit() {

    let customObservable = Observable.create(observer => {
      setTimeout(() => {
        observer.next("Angular");
      },1000);
      setTimeout(() => {
        observer.next("Typescript");
      },2000);
      setTimeout(() => {
        observer.next("Java");
      },3000);
      setTimeout(() => {
        observer.next("HTML");
        //observer.error(new Error("limit exceed"));

      },3000);
      setTimeout(() => {
        observer.next("CSS");
      },3000);
      setTimeout(() => {
        observer.next(".Net");
        observer.complete();
      },3000);
    });

    customObservable.subscribe(response => {
      console.log(response);
      this.designUtility.appendChild(response,"elContainer");
     // this.designUtility.appendChild(response,"elContainer2");
    },(error) => {
      this.techStatus="error";
    },()=>{
      this.techStatus="completed";
    });

    //Ex-02 (custom interval)

    const customObservable2=Observable.create(observer => {
      let count=1;
      setInterval(() => {
        observer.next("Data Emit "+count);
        count++;
        if(count >= 5){
          observer.error("error emit");
        }
      },1000);
    })

    this.subscription2=customObservable2.subscribe(response => {
      console.log(response);
      this.designUtility.appendChild(response,"elContainer2");
    },(error) => {
      this.techStatus2="error";
    },()=>{
      this.techStatus2="completed";
    });

    //Ex-03 ()
  }

  ngOnDestroy(){
  this.subscription2.unsubscribe();
  }

}
