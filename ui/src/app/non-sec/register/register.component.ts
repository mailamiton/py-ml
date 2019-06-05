import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private elementRef : ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'linear-gradient(to right, rgb(241, 243, 245), rgb(10, 10, 10));';
  }

  register(){
    console.log("Register With Us !!");
  }


}
