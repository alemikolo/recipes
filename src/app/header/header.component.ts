import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() requestRoute = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onGetResource(resourceName: string) {
    this.requestRoute.emit(resourceName);
  }
}
