import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.css']
})
export class SidenavContainerComponent implements OnInit {
  @Input()
  mSources: Array<any>;

  @Input()
  mArticles: Array<any>;

  constructor() {}

  ngOnInit() {}
}
