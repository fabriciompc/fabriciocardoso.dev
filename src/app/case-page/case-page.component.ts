import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Case } from '../models/case';

@Component({
  selector: 'app-case-page',
  templateUrl: './case-page.component.html',
  styleUrls: ['./case-page.component.scss'],
})
export class CasePageComponent implements OnInit {
  case: Case = {} as Case;
  constructor(private router: Router, private location: Location) {
    console.log(this.location.getState());
  }

  ngOnInit() {
    this.case = history.state;
    console.log(this.case);
  }
}
