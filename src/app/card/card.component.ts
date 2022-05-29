import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Case } from '../models/case';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() cases: Case[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToCaseDetail(c: Case) {
    this.setCaseOnLocalStorage(c);
    this.router.navigateByUrl('/case', { state: c });
  }

  private setCaseOnLocalStorage(c: Case) {
    localStorage.setItem('case', JSON.stringify(c));
  }

  checkLanguageForColor(language: string): string {
    switch (language) {
      case 'CSharp':
        return 'csharp-theme';
      case 'Typescript':
        return 'typescript-theme';
      case 'Javascript':
        return 'javascript-theme';
      default:
        return 'default';
    }
  }
}
