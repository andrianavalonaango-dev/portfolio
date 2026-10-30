import { Component } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  // Remplace par tes vrais projets. Ils viendront de l'API Node à l'étape 7.
  projects: Project[] = [
    {
      title: 'Nom du projet 1',
      problem: 'une phrase sur le besoin.',
      solution: 'ton rôle et tes choix techniques.',
      metric: '4 pages, 100 % responsive',
      tags: ['Angular', 'Node.js', 'MongoDB'],
      demoUrl: '#',
      codeUrl: 'https://github.com/ton-pseudo/projet1'
    },
    {
      title: 'Nom du projet 2',
      problem: 'une phrase sur le besoin.',
      solution: 'ton rôle et tes choix techniques.',
      metric: 'API REST de 12 routes',
      tags: ['Express', 'JavaScript', 'MySQL'],
      demoUrl: '#',
      codeUrl: 'https://github.com/ton-pseudo/projet2'
    },
    {
      title: 'Nom du projet 3',
      problem: 'une phrase sur le besoin.',
      solution: 'ton rôle et tes choix techniques.',
      metric: 'Projet d\'équipe de 4 personnes',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoUrl: '#',
      codeUrl: 'https://github.com/ton-pseudo/projet3'
    }
  ];
}