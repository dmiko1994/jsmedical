import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  qualityTrigger: boolean;
  philanthropyTrigger: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  triggerQuality() {
    this.qualityTrigger = true;
    this.philanthropyTrigger = false;
  }

  triggerPhilanthropy() {
    this.qualityTrigger = false;
    this.philanthropyTrigger = true;
  }

}
