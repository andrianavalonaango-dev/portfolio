import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Projects, Skills, Experience, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}