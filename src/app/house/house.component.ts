import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MytranslateService } from '../services/mytranslate.service';
import { PreStepComponent } from './components/pre-step/pre-step.component';

@Component({
  selector: 'app-house',
  standalone: true,
  imports: [TranslateModule, PreStepComponent],
  templateUrl: './house.component.html',
  styleUrl: './house.component.scss',
})
export class HouseComponent {
  constructor(_mytranslateService: MytranslateService) {}
  private _mytranslateService = inject(MytranslateService);
  readonly _translateService = inject(TranslateService);

  change(lang: string): void {
    this._mytranslateService.changeLang(lang);
  }
}
