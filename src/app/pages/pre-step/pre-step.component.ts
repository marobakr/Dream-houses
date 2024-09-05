import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-pre-step',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
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
/*

-1: small the wight for form-check-input
-2 click active for checkbox
-3 remove ../../../ form all image
-4 add fixed with for image
-5 change cardm manula to card bootstrap
6- use max-width for any fixed width
7- نفترض كلام مرو صح طب حهط border-raiuis ازاي؟
8-make global style for shared style p ,h2
9- wright mendia qeury
*/
