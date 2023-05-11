import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Movies from 'src/app/data/movies.interface';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent {
  constructor(private formBuilder: FormBuilder) { }


  movies : Movies[] = [
    {title: "Sider Man", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGJTbOjZNvenydGHwbUA41-EmtM35e9pELw&usqp=CAU", releaseDate: new Date(), price: 0},
    {title: "Ant Man", poster: "https://www.themoviedb.org/t/p/w500/qxMs5TU6zOTQ7cbmBZ6xGvHUDa2.jpg", releaseDate: new Date(), price: 0},
    {title: "Inception", poster: "https://occ-0-41-993.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRO7wCHTwNucNkQ1jGsVVQj7mn5HFo28f1JnePEK37bAlWVFUI1hnay7nrEU2TFzBMWAhtjmsltPsos-Z_hxhy9SMU8UQDNiQjws.jpg?r=9d5",  releaseDate: new Date(), price: 0}
  ];

  form!: FormGroup;

  genres = [{ id: 1, name: "Drama" }, { id: 2, name: "Comedy" }];

  originalMovies = this.movies;

  ngOnInit(): void {
    this.form = this.formBuilder?.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false
    });

    this.form.valueChanges.subscribe(values =>{
        this.movies = this.originalMovies;
        this.filterMovies(values);
    })
  }

  filterMovies(values: any){
    if(values.title){
      this.movies = this.movies.filter(movie => movie.title.indexOf(values.title) !== -1);
    }
  }

  cleanForm() {
    this.form.reset();
  }

}
