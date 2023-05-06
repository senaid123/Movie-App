import { Component, Input } from '@angular/core';
import  Movies  from "../../data/movies.interface"

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.css']
})
export class GenericListComponent {

  @Input()
  list: Movies[] = [];
}
