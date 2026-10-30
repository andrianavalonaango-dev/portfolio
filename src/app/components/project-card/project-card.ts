import { Component, input } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {
  project = input.required<Project>();
}