import { Component, OnInit } from '@angular/core';
const Typewriter = require('typewriter-effect/dist/core');

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  theme: string = 'default';

  ngOnInit() {
    this.initTypewriterEffect();
  }

  changeTheme(theme: string) {
    this.theme = theme;
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
