import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
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
]);
