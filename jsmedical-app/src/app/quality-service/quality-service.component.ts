import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quality-service',
  templateUrl: './quality-service.component.html',
  styleUrls: ['./quality-service.component.scss']
})
export class QualityServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, window.scrollY + 300);
  }

}
