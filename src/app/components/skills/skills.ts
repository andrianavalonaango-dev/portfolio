import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  groups = [
  { title: 'Front-end', items: 'HTML, CSS, JavaScript, React, Angular, Vue.js, Tailwind CSS' },
  { title: 'Back-end & données', items: 'PHP/Laravel, Node.js, NestJS, Python, SQLite, MySQL' },
  { title: 'Outils', items: 'Git, GitHub' }
];}