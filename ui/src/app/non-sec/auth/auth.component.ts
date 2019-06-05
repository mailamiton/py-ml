import { Component, OnInit } from '@angular/core';
import { BaseUrl } from '../../app.enum';
import { AppService } from '../../services/app.service';
import { HeaderService } from '../../services/header.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  userName = "";
  passWord = "";
  constructor(private appService: AppService, private headerService: HeaderService ) {

   }

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

          
          console.log("BaseUrl", BaseUrl, requestObject);
          this.appService.postApiWithHeadersCall(BaseUrl, requestObject, this.headerService.getHeaders()).subscribe(
            res => {
               console.log('response:::::::::',res);
              // localStorage.setItem('token');
             // this.router.navigate(['/excel-upload']);
            }, err => {
              console.log('err:::::::::::::;',err.message);
            }
          )

          var requestObj = {"_id":"5b76690b72ea145e75b63f83","category":"Electronics","image_url":"../assets/images/elec4.jpg","name":"Huawei P20 Pro Blue (40MP Leica Triple Camera, 6GB+128GB)","price":"64999"};
          this.appService.postApiWithHeadersCall("http://172.16.28.136:3001/api/cart", requestObj, this.headerService.getHeaders()).subscribe(
            res => {
               console.log('response:::::::::',res);
              // localStorage.setItem('token');
             // this.router.navigate(['/excel-upload']);
            }, err => {
              console.log('err:::::::::::::;',err.message);
            }
          )
          /*this.appService.getApiCall("http://172.16.28.136:3001/api/", {}).subscribe(
            res => {
              console.log("res ::: ", res);
            }
          )*/
        }
      }

}
