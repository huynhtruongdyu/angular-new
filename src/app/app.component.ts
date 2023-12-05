import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from '@core/core.module';
import { ThemeSwitcherComponent } from '@core/components/theme-switcher/theme-switcher.component';
import { LocalStorageService } from '@core/services/storages/local-storage.service';
import { CryptoService } from '@core/services/securities/crypto.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CoreModule, ThemeSwitcherComponent],
  providers: [LocalStorageService, CryptoService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-new';
  constructor(
    private _localStorageService: LocalStorageService,
    private _cryptoService: CryptoService
  ) { }


  ngOnInit(): void {
    this.initTheme();
  }

  initTheme() {
    const themeEncrypted = this._localStorageService.get('theme');
    console.log('theme', themeEncrypted);
    if (themeEncrypted == null) {
      this._localStorageService.set('theme', this._cryptoService.encrypt('light'));
    }
    const themeDecrypted = this._cryptoService.decrypt(themeEncrypted!);
    console.log('themeDecrypted', themeDecrypted);
    document.body.setAttribute('data-theme', this._cryptoService.decrypt(themeDecrypted));
  }

}
