import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  public notifications = [
     'Marked searches',
      'Saved searches',
      'Messages (new message)',
      'Messages (new request)',
      'Saved/Marked contacts',
      'App updates'
  ];
  constructor() { }

  ngOnInit() {
  }

}
