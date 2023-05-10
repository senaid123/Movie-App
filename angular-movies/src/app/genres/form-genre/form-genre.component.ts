import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { CreateGenreComponent } from '../create-genre/create-genre.component';
import { genreCreationDTO } from '../genre.model';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent {
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  @Input()
  model : genreCreationDTO | undefined;

  form!: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<genreCreationDTO> = new EventEmitter<genreCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required, Validators.minLength(3), Validators.maxLength(20), firstLetterUppercase()]
      }]
    })

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }


  saveChanges(): void {
    this.onSaveChanges.emit(this.form.value);
  }

  getErrorMessageFieldName() {
    const field = this.form.get('name');

    if (field?.hasError('firstLetterUppercase')) {
      return field.getError('firstLetterUppercase').message;
    }

    if (field?.hasError('required')) {
      return 'This field is required';
    }

    if (field?.hasError('minlength')) {
      return 'Minumum length required is 3';
    }

    if (field?.hasError('maxlength')) {
      return 'Max length is 20';
    }
    return '';
  }
}
