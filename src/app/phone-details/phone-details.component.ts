import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {

  phone: Object;

  constructor(
    private myRoute: ActivatedRoute,
    private myPhoneService: PhoneService
  ) { }

  ngOnInit() {
    this.myRoute.params.subscribe((params) => {
      this.getPhoneDetails(params['id']);
    });
  }

  getPhoneDetails(id) {
    this.myPhoneService.get(id)
      .then((thePhoneDetails) => {
        this.phone = thePhoneDetails;
      })
      .catch((err) => {
        console.log('ERROR', err);
      });
  }

}
