import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {genreCreationDTO} from '../genre.model';

@Component({
  selector: 'app-edit-genres',
  templateUrl: './edit-genres.component.html',
  styleUrls: ['./edit-genres.component.css']
})
export class EditGenresComponent {
  constructor(private activatedRoute: ActivatedRoute) {}
  
  model : genreCreationDTO = {name: 'Drama'}

  ngOnInit(): void {
  }

  saveChanges(genreCreationDTO: genreCreationDTO) : void{
    console.log(genreCreationDTO);
  }
}
