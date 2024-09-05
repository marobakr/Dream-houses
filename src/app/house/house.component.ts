import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MytranslateService } from '../services/mytranslate.service';
import { PreStepComponent } from './components/pre-step/pre-step.component';
import { ProbComponent } from './components/prob/prob.component';
import { SelectionComponent } from './components/selection/selection.component';
import { SubmissionlComponent } from './components/submissionl/submissionl.component';

@Component({
  selector: 'app-house',
  standalone: true,
  imports: [
    TranslateModule,
    PreStepComponent,
    SelectionComponent,
    ProbComponent,
    SubmissionlComponent,
  ],
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
