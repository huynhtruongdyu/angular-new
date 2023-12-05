import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from '@core/core.module';
import { ThemeSwitcherComponent } from '@core/components/theme-switcher/theme-switcher.component';
import { LocalStorageService } from '@core/services/local-storage.service';
import { CryptoService } from '@core/services/crypto.service';

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
    this._localStorageService.set('hehe', this._cryptoService.encrypt('hehe'));
  }


}
