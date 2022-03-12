import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  show:boolean=false;
  constructor() { }

  ngOnInit(): void {

  }
toggleForm() {
    this.show= !this.show
  }
}
