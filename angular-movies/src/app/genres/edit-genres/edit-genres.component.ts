import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-genres',
  templateUrl: './edit-genres.component.html',
  styleUrls: ['./edit-genres.component.css']
})
export class EditGenresComponent {
  constructor(private activatedRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      alert(params['id']);
    })
  }
}
