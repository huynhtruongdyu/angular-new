import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';
import { LocalStorageService } from '@core/services/storages/local-storage.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss'
})
export class ThemeSwitcherComponent {
  private DEFAULT_COLOR_THEME = 'light';
  private currentTheme = 'light';
  isLightTheme = this.currentTheme == this.DEFAULT_COLOR_THEME;
  constructor(
    private _localStorage: LocalStorageService
  ) {

    const currentColorTheme = _localStorage.get('theme');
    if (currentColorTheme) {
      this.currentTheme = currentColorTheme;
      document.body.setAttribute('data-theme', currentColorTheme);
    } else {
      this.currentTheme = this.DEFAULT_COLOR_THEME;
      _localStorage.set('theme', this.DEFAULT_COLOR_THEME);
      document.body.setAttribute('data-theme', this.DEFAULT_COLOR_THEME);
    }
    this.isLightTheme = this.currentTheme === this.DEFAULT_COLOR_THEME;
  }

  onThemeSwitchChange() {
    this.currentTheme = this.currentTheme == 'light' ? 'dark' : 'light';
    this.isLightTheme = this.currentTheme === this.DEFAULT_COLOR_THEME;
    this._localStorage.set('theme', this.currentTheme);
    document.body.setAttribute('data-theme', this.currentTheme);
  }

}
