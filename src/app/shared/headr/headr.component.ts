import { Location } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MytranslateService } from '../../services/mytranslate.service';

@Component({
  selector: 'app-headr',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './headr.component.html',
  styleUrl: './headr.component.scss',
})
export class HeadrComponent {
  constructor(private location: Location) {}
  private _mytranslateService = inject(MytranslateService);
  readonly _translateService = inject(TranslateService);

  @Input({ required: false }) backTitle: string = '';
  @Input({ required: false }) backImage: string = '';
  close: string = './assets/images/Frame 1321319546.svg';

  goBack(): void {
    this.location.back();
  }

  change(lang: string): void {
    this._mytranslateService.changeLang(lang);
  }
  changeLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const lang = selectElement.value;
    this.change(lang);
  }
}
