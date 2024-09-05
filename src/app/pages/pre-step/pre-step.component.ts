import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MytranslateService } from '../../services/mytranslate.service';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-pre-step',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TranslateModule],
  templateUrl: './pre-step.component.html',
  styleUrl: './pre-step.component.scss',
  animations: [
    trigger('fadeIn', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition(':enter', [
        animate(
          '1s ease-in',
          style({
            opacity: 1,
          })
        ),
      ]),
    ]),
  ],
  providers: [],
})
export class PreStepComponent {
  IsCheckedOne: boolean = false;
  IsCheckedTwo: boolean = false;
  constructor(private router: Router) {}
  private _mytranslateService = inject(MytranslateService);
  readonly _translateService = inject(TranslateService);

  onRadioChange(
    selectedOption: HTMLInputElement,
    property: 'IsCheckedOne' | 'IsCheckedTwo'
  ): void {
    this.IsCheckedOne = property === 'IsCheckedOne' && selectedOption.checked;

    this.IsCheckedTwo = property === 'IsCheckedTwo' && selectedOption.checked;
    console.log(this.IsCheckedOne || this.IsCheckedTwo);
  }

  nextStep(validMove: boolean): void {
    if (validMove) {
      this.router.navigate(['/select']);
    }
  }
}
