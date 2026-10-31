import { Component, inject, signal } from '@angular/core';
import { Theme } from '../../services/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  theme = inject(Theme);
  menuOpen = signal(false);

  toggle() { this.menuOpen.update(v => !v); }
  close() { this.menuOpen.set(false); }
}