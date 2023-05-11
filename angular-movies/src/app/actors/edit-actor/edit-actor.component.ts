import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreationDTO } from '../actor.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent {
  constructor(private activatedRoute: ActivatedRoute) { }

  model: actorCreationDTO = { name: 'Tom Holand', dateOfBirth: new Date() }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
    })
  }

  saveChanges(actor: actorCreationDTO) {
    console.log(actor);
  }
}
