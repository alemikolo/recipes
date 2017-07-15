import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  route = 'recipes';
  title = 'kucharz';

  onRequestRoute(route: string) {
    this.route = route;
  }

}
