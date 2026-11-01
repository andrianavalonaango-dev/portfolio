import { Component, computed, input, signal } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {
  project = input.required<Project>();
  index = signal(0);

  images = computed(() => this.project().images ?? []);

  current = computed(() => this.images()[this.index()] ?? null);

  next() {
    const length = this.images().length;
    if (length > 0) {
      this.index.update(i => (i + 1) % length);
    }
  }

  prev() {
    const length = this.images().length;
    if (length > 0) {
      this.index.update(i => (i - 1 + length) % length);
    }
  }
}