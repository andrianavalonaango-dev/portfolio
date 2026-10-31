import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

const API_URL = 'http://localhost:3000/api';

@Injectable({ providedIn: 'root' })
export class ProjectsApi {
  private http = inject(HttpClient);

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${API_URL}/projects`);
  }
}