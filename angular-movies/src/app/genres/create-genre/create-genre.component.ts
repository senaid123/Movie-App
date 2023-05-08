import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent {
  constructor(private router: Router) {}

  saveChanges() {
    this.router.navigate(["/genres"])
  }
}
