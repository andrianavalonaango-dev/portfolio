import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  steps = [
    {
      period: '2025 – auj.',
      title: 'Licence 3 Informatique · [Ton université]',
      text: 'Spécialisation développement. Projets web full-stack en équipe.'
    },
    {
      period: '2024 – 2025',
      title: 'Licence 2 Informatique · [Ton université]',
      text: 'Algorithmique, bases de données, premiers projets web.'
    }
  ];
}