import { Injectable } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import { RequestOptions, Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }
  token = "A231FBDB-EF74-4EA6-9841-E724137EB07A";
  
  // getHeaders() {
  //   let options: any;
  //   let headers = new HttpHeaders();
  //   headers.append('token', 'admin');
  //   // headers.append('Content-T', this.token);
  //   // headers.append('Content-Type', 'application/json');
  //   // headers.append('Accept', 'application/json');
  //   // headers.append('token', this.token);
  //   options = {
  //     headers: headers
  //   }
  //   return options;
  // }
  getHeaders() {
    let options: any;
    let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');
    // headers.append("token", "admin");
    headers.append("token", this.token);
    options = new RequestOptions({headers});
    return options;
  }
  
}
