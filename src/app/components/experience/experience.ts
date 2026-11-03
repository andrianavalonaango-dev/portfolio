import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  steps = [
  {
    period: 'Depuis 2024',
    title: 'Licence 3 Informatique · ESTI Antanimena',
    text: "Parcours Intégration et Développement. Conception d'applications web avec PHP/Laravel, JavaScript, React et Node.js/NestJS, interfaces avec Tailwind CSS. Projets : gestion de parking et plateforme d'emploi E-ASA."
  },
  {
    period: 'Février 2026',
    title: "Automatisation IA · Orange Digital Center",
    text: "Formation en automatisation par l'intelligence artificielle."
  }
];
}