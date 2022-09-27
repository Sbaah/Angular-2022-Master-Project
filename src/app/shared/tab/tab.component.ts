import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  //  sending vale to children classes
  // sendind value the tabs-container
  @Input() tabTitle =''
  @Input() active = false

  constructor() { }

  ngOnInit(): void {
  }

}
