import { Component, OnInit } from '@angular/core';
import {RegisterPage} from '../register/register.page';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('Test');
  }
}
