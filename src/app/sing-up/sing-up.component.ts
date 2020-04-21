import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms' 

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {
  isubmited = false;
  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    username: new FormControl('username',Validators.required),
    password: new FormControl('password',Validators.required)
  });

  submit(form){
    this.isubmited = true;
    console.log(form)

    setTimeout( () => this.isubmited = false,3000);
 
  }

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

}
