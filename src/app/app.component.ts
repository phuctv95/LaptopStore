import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'laptop-store';

  constructor(private http: HttpClient) {
    this.http.get('').subscribe();
  }

  onClick() {
    console.log('from onClick()');
  }
}
