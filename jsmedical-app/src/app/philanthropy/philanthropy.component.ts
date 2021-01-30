import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'philanthropy',
  templateUrl: './philanthropy.component.html',
  styleUrls: ['./philanthropy.component.scss']
})
export class PhilanthropyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, window.scrollY + 300);
  }

}
