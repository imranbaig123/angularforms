import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForms';
  defaultCountry = 'india';
  firstname!:string;
  lastname!:string;

  @ViewChild('myForm') form!: NgForm;

  onSubmit(form: NgForm ){
    console.log(form);
  }


}
