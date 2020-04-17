import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f', {static: false}) dataForm: NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.dataForm.form.patchValue(
      {username: suggestedName}
    );
  }


  onSubmit() {
    console.log(this.dataForm);
  }
}
