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
          title: "Infinity war",
          releaseDate: new Date('2001-22-12'),
          price: 14322423
          
        },
        {
          title: "John wick 3",
          releaseDate: new Date('2023-11-13'),
          price: 22345
        },
        {
          title: "Slender Man",
          releaseDate: new Date('2013-11-13'),
          price: 324231
        }
      ]
    }

  moivesFutureReleases: Movies[] = [];
  moviesInTheaters: Movies[] = [];
}


