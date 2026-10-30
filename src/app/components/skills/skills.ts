import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  groups = [
    { title: 'Front-end', items: 'Angular, TypeScript, HTML, CSS, JavaScript' },
    { title: 'Back-end & données', items: 'Node.js, Express, API REST, MySQL' },
    { title: 'Outils & qualité', items: 'Git, GitHub, VS Code, tests, déploiement' }
  ];
}