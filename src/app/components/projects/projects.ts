import { Component, computed, inject, signal } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { Project } from '../../models/project.model';
import { ProjectsApi } from '../../services/projects-api';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  private api = inject(ProjectsApi);

  projects = signal<Project[]>([]);
  loading = signal(true);
  error = signal(false);
  selected = signal('Tous');

  tags = computed(() => ['Tous', ...new Set(this.projects().flatMap(p => p.tags))]);

  filtered = computed(() =>
    this.selected() === 'Tous'
      ? this.projects()
      : this.projects().filter(p => p.tags.includes(this.selected()))
  );

  constructor() {
    this.api.getProjects().subscribe({
      next: data => {
        this.projects.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      }
    });
  }
}