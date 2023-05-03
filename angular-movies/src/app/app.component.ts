import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(()=>{
      this.employees = [
        {
          name: "John",
          phone: 223454,
          email: "johndoe@gmail.com",
          department: "IT",
          signingDate: new Date()
        },
        {
          name: "Mark",
          phone: 214542,
          email: "markzucc@gmail.com",
          department: "Management",
          signingDate: new Date()
        },
        {
          name: "Joe",
          phone: 12434,
          email: "joeblack@gmail.com",
          department: "Human Resources",
          signingDate: new Date()
        }
      ];
    },1000)
  }


  employees: Employees[] = [];

  movie = {
    title: "Spiderman",
    releaseDate: new Date(),
    price: 1400.99
  };

   title : string = 'Any value';

   duplicateNumber(number : number){
      return number * 2;
   }
}

interface Employees{
  name: string;
  phone: number;
  email: string;
  department: string;
  signingDate: Date;
}
