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
  theme: string = 'default';
  caseEnd: any;
  constructor() {}

  ngOnInit() {
    this.case = history.state;
    this.getThemeOnLocalStorage();

    if (!!this.case) {
      this.getCaseOnLocalStorage();
    }

    if (!this.case.end) {
      this.caseEnd = 'now';
    } else {
      this.caseEnd = this.case.end;
    }
  }

  private getCaseOnLocalStorage() {
    const c = localStorage.getItem('case') as string;
    this.case = JSON.parse(c);
  }

  private getThemeOnLocalStorage() {
    this.theme =
      localStorage.getItem('theme') !== 'null'
        ? (localStorage.getItem('theme') as string)
        : 'default';
  }
}
