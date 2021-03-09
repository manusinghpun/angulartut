import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'title of project';

  //variable
  name = 'Arjun Singh';

  //function
  getName() 
  {
    return this.name;
  }

  //object
  obj = {
    name : 'peter',
    age : 20
  }

  //array
  arr = [
    'bruce','peter','anil'
  ]

  siteUrl = window.location.href;

  myEvent(evt: any)
  {
    console.warn(evt)
  }

  data = ['anil','peter','sam']

  data1 = [];

  constructor(private user:UserServiceService)
  {
    this.user.getData().subscribe( data1 => {
       this.data1 = <any> data1

    })
  }

 
  
}
