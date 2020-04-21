import { PlayService } from './play.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  text = 'hello text';
  infos;

  post = {
    color : {
      'blue' : 'blue',
      'red' : 'red',
      'black' : 'black'
    }
  }

  disabled = false;

  disable:boolean;

  constructor(playservice:PlayService){
    this.infos = playservice.getData();
  }

  ClickBtn($event){
    $event.stopPropagation();
    
    console.log($event);
    let random_boolean = Math.random() >= 0.5;
    this.disable = random_boolean;
  }

  clickDiv(){
    console.table(this.infos);
  }

  // event onkeyup :
  // onkey($event){
  //   if($event.keyCode === 13)
  //   console.log('key press');
  // }

    // onkey(email){
    //   console.info(email.value);
    // }
    email: string = 'mohamed.akour21@gmail.com';
    onkey(){
      console.info(this.email);
    }
    // fas:boolean = true;
    // far:boolean = false;
    fa:boolean = true;
    // changeImg(){
    //     if(this.fas){
    //       this.fas = false;
    //       this.far = true;
    //     }else {
    //       this.fas = true;
    //       this.far = false;
    //     }
    // }
    changeImg(){
      this.fa = !this.fa;
  }


}
