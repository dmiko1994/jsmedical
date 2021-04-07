import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  emailString = "mailto:jsmedical@gmail.com?Subject=JSMedical Inquiry";

  constructor() { }

  ngOnInit(): void {
  }

}
