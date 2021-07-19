import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Profile', url: '/folder/Inbox', icon: 'body' },
    { title: 'Messages', url: '/folder/group', icon: 'mail' },
    { title: 'Group Sessions', url: '/folder/Outbox', icon: 'Calendar' },
    { title: 'Individual Sessions', url: '/folder/Favorites', icon: 'person' },
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
