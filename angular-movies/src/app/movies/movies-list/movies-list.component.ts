import { Component, Input, OnInit } from '@angular/core';
import Movies from 'src/app/data/movies.interface';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {}

  @Input()
  movies: Movies[] = [];

  remove(index: number){
    this.movies.splice(index,1);
  }
}
