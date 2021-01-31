import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dvt-info',
  templateUrl: './dvt-info.component.html',
  styleUrls: ['./dvt-info.component.scss']
})
export class DvtInfoComponent implements OnInit {
  panelOpenState = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
