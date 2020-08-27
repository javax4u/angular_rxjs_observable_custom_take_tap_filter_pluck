import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor() { }
   valueOfPromise;

    ngOnInit() {

   let   dell={
        color:'blue',
        hardDisk:'2TB',
        size:'15 inch'
       };
     let  hp={
        color:'blue',
        hardDisk:'2TB',
        size:'15 inch'
       };
     let  notAvailable={
        color:'blue',
        hardDisk:'2TB',
        size:'15 inch'
       };
    let isDellAvailable=true;
    let isHpAvailable=false;
    var buyLaptop= new Promise(
      function(accept,reject){
        if(isDellAvailable){
          setTimeout(data => {
            accept(dell);
          },3000);

        }else  if(isHpAvailable){
          setTimeout(data => {
            accept(hp);
          },3000);

        }else{
          setTimeout(data => {
            reject(notAvailable);
          },3000);

        }

      }
    );

    //buyLaptop.then(console.log);
    //buyLaptop.then(temporary => console.log(temporary));
    buyLaptop.then(temporary => {
      console.log("third way:"+temporary);
      this.valueOfPromise=JSON.stringify(temporary);
    }).catch(temporary => {
      console.log("catch block:"+temporary);
      this.valueOfPromise=JSON.stringify(temporary);
    }

    );
  }

  methodButton_01(){
    console.log("methodButton_01 called");
   // buyLaptop.
  }
}
