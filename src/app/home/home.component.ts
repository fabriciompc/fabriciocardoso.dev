import { Component, OnInit } from '@angular/core';
import { Case } from '../models/case';
import { CaseService } from './../shared/case.service';
const Typewriter = require('typewriter-effect/dist/core');

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  theme: string = 'default';
  cases: Case[] = new Array<Case>();
  filteredCases: Case[] = new Array<Case>();

  constructor(private caseService: CaseService) {}

  ngOnInit() {
    this.initTypewriterEffect();
    this.initCasesList();
  }

  changeTheme(theme: string) {
    this.theme = theme;
    this.setThemeOnLocalStorage(theme);
    this.filterByLanguage(theme);
  }

  private initCasesList() {
    this.caseService.get().subscribe((data) => {
      this.cases = data;
    });
  }

  private filterByLanguage(languageToFilter: string) {
    this.filteredCases = this.cases.filter((a) =>
      a.language
        .toLocaleLowerCase()
        .includes(languageToFilter.replace(/-theme/g, ''))
    );
  }

  private setThemeOnLocalStorage(theme: string) {
    localStorage.setItem('theme', theme);
  }

  private initTypewriterEffect() {
    const app = document.getElementById('typewriter');

    const typeWriter = new Typewriter(app, {
      loop: true,
      delay: 75,
    });

    typeWriter
      .pauseFor(500)
      .typeString('a developer!')
      .pauseFor(1500)
      .deleteAll(100)
      .typeString('an aviation enthusiast!')
      .pauseFor(1500)
      .deleteAll(100)
      .typeString('a tech lead!')
      .pauseFor(1500)
      .deleteAll(100)
      .typeString("Luke's Father!")
      .pauseFor(1500)
      .deleteAll(100)
      .start();
  }
}
