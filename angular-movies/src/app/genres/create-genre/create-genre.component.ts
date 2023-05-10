import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {genreCreationDTO} from '../genre.model'
@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})

export class CreateGenreComponent { 
  constructor(private router: Router) { }

  ngOnInit(): void {  }

  saveChanges(genreCreationDTO: genreCreationDTO) {
    console.log(genreCreationDTO);
    this.router.navigate(["/genres"])
  }
}
