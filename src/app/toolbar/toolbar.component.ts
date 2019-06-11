import { Component, OnInit, Input } from '@angular/core';
import { MatMenu } from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input()
  matMenu: MatMenu;

  constructor() {}

  ngOnInit() {}
}
