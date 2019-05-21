import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {


constructor(private http: HttpClient) { }

  getApiCall(url, paramString){
    let requestUrl = url;
    if(paramString){
      requestUrl += `?${paramString}`;
    }
    const apiRequest = this.http.get(requestUrl);
    return apiRequest;
  }

  postApiCall(url, params){
    const requestUrl = url;
    const apiRequest = this.http.post(requestUrl, params);
    return apiRequest;
  }

  postApiWithHeadersCall(url, params, headers){
    const requestUrl = url;
    const apiRequest = this.http.post(requestUrl, params, headers);
    return apiRequest;
  }

}
