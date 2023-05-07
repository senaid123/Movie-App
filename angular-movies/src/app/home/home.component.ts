import { Component, OnInit } from '@angular/core';
import Movies from '../data/movies.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    this.moviesInTheaters = [
      {
        title: "Spider Man",
        releaseDate: new Date('2022-02-12'),
        price: 14322423,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGJTbOjZNvenydGHwbUA41-EmtM35e9pELw&usqp=CAU"
      },
      {
        title: "Ant-man",
        releaseDate: new Date('2013-11-13'),
        price: 324231,
        poster: "https://www.themoviedb.org/t/p/w500/qxMs5TU6zOTQ7cbmBZ6xGvHUDa2.jpg",
      }
    ]

    this.moivesFutureReleases = [];
  }

  moivesFutureReleases: Movies[] = [];
  moviesInTheaters: Movies[] = [];

  handleRating(rate: number) {
    alert("user selected this rate" + rate);
  }
}
