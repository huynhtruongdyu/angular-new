import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from '@core/core.module';
import { ThemeSwitcherComponent } from '@core/components/theme-switcher/theme-switcher.component';
import { LocalStorageService } from '@core/services/storages/local-storage.service';
import { CryptoService } from '@core/services/securities/crypto.service';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CoreModule, FormsModule, SharedModule, ThemeSwitcherComponent],
  providers: [LocalStorageService, CryptoService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-new';
  showSearchResult = true;
  searchValue = '';
  constructor(
    private _localStorageService: LocalStorageService,
    private _cryptoService: CryptoService
  ) { }


  ngOnInit(): void {
  }

  setShowSearchResult(isShow: boolean) {
    this.showSearchResult = isShow;
  }



  onSearchChange(e: Event) {
    // if (!this.searchValue) {
    //   this.showSearchResult = false;
    // }
  }

}
