import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = "";
  passWord = "";
  constructor(private appService: AppService) { }

  ngOnInit() {
  }

    login(){
        if(!this.userName || !this.passWord){
          console.log('input error', this.userName, this.passWord);
        } else{
          const requestObject = {
            userName: this.userName,
            passWord: this.passWord
          }

          this.appService.postApiCall("", requestObject).subscribe(
            res => {
              // console.log('response:::::::::',res);
              // localStorage.setItem('token');
             // this.router.navigate(['/excel-upload']);
            }, err => {
              console.log('err:::::::::::::;',err.message);
            }
          )
        }
      }

}
