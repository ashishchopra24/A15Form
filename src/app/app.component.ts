import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f', {static: false}) dataForm: NgForm;

  user = {
    username: '',
    email: '',
    secretQuestion: ''
  };
  submitted = false;


  suggestUserName() {
    const suggestedName = 'Superuser';
    this.dataForm.form.patchValue(
      {username: suggestedName}
    );
  }


  onSubmit() {
    console.log(this.dataForm);
    this.submitted = true;
    this.user.username = this.dataForm.value.username;
    this.user.email = this.dataForm.value.email;
    this.user.secretQuestion = this.dataForm.value.secret;
    this.dataForm.reset();

  }
}
