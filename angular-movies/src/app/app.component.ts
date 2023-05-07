import { Component, OnInit } from '@angular/core';
import Movies from './data/movies.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.moviesInTheaters = [
      {
        title: "John Wick",
        releaseDate: new Date('2022-02-12'),
        price: 14322423

      },
      {
        title: "Spider-man",
        releaseDate: new Date('2015-11-13'),
        price: 22345
      },
      {
        title: "Ant-man",
        releaseDate: new Date('2013-11-13'),
        price: 324231
      }
    ]

    this.moivesFutureReleases = [
      {
        title: "John Wick",
        releaseDate: new Date('2022-02-12'),
        price: 14322423

      },
      {
        title: "Spider-man",
        releaseDate: new Date('2015-11-13'),
        price: 22345
      },
      {
        title: "Ant-man",
        releaseDate: new Date('2013-11-13'),
        price: 324231
      },
      {
        title: "John Wick",
        releaseDate: new Date('2022-02-12'),
        price: 14322423

      },
      {
        title: "Spider-man",
        releaseDate: new Date('2015-11-13'),
        price: 22345
      },
      {
        title: "Ant-man",
        releaseDate: new Date('2013-11-13'),
        price: 324231
      }
    ];
  }

  moivesFutureReleases: Movies[] = [];
  moviesInTheaters: Movies[] = [];

  handleRating(rate : number){
    alert("user selected this rate" + rate);
  }
}


