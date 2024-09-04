import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pre-step',
  standalone: true,
  imports: [CommonModule],
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
}

/*

-1: small the wight for form-check-input
-2 click active for checkbox
-3 remove ../../../ form all image
-4 add fixed with for image
-5 change cardm manula to card bootstrap
6- use max-width for any fixed width
7- نفترض كلام مرو صح طب حهط border-raiuis ازاي؟
*/
