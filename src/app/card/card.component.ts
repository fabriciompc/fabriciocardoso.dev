import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Case } from '../models/case';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() cases: Case[] = [];

  constructor() {}

  ngOnInit(): void {}

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
