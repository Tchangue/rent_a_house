import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  public items = [
      'Write email',
      'Call support',
      'Rate the app (through Google play)'
  ];
  constructor() { }

  ngOnInit() {
  }

}
