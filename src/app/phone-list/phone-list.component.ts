import { Component, OnInit } from '@angular/core';

import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  phones: Array<Object> = [];

  constructor(private myPhoneService: PhoneService) { }

  ngOnInit() {
    this.myPhoneService.getList()
      .then((phonesList) => {
        this.phones = phonesList;
      });
  }

}
