import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css']
})
export class CardContentComponent implements OnInit {
  @Input()
  articleDescription;

  constructor() {}

  ngOnInit() {}
}
