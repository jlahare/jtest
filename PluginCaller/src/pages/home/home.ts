import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { JTestProvider } from '../../providers/j-test/j-test';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public jtest: JTestProvider) {

  }

  test()
  {
     this.jtest.coolMethod("From Ionic").then(data => alert(data)).catch(err => alert(JSON.stringify(err)));
   
  }

  addTest()
  {
    let data = {
      "param1": "20",
      "param2": "5"
    };
     this.jtest.add(data).then(data => alert(data)).catch(err => alert(JSON.stringify(err)));
   
  }

  multiplyTest()
  {
    let data = {
      "param1": "20",
      "param2": "5"
    };
     this.jtest.multiply(data).then(data => alert(data)).catch(err => alert(JSON.stringify(err)));
   
  }
  substractTest()
  {
    let data = {
      "param1": "20",
      "param2": "5"
    };
     this.jtest.substract(data).then(data => alert(data)).catch(err => alert(JSON.stringify(err)));
   
  }
  divideTest()
  {
    let data = {
      "param1": "20",
      "param2": "5"
    };
     this.jtest.divide(data).then(data => alert(data)).catch(err => alert(JSON.stringify(err)));
   
  }

}
