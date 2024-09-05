import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HouseComponent } from './pages/house/house.component';
import { MytranslateService } from './services/mytranslate.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HouseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dream-houses';
  constructor(_mytranslateService: MytranslateService) {}
  private _mytranslateService = inject(MytranslateService);
  readonly _translateService = inject(TranslateService);

  change(lang: string): void {
    this._mytranslateService.changeLang(lang);
  }
  changeLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const lang = selectElement.value;
    this.change(lang);
  }
}
