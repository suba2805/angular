import { Component } from '@angular/core';
import { FormGroup ,FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  registrationForm = new FormGroup({
    userName: new FormControl('suba'),
    password: new FormControl(''),
    confirmpassword: new FormControl('')
  });
}
