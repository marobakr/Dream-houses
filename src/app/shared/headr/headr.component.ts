import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headr',
  standalone: true,
  imports: [],
  templateUrl: './headr.component.html',
  styleUrl: './headr.component.scss',
})
export class HeadrComponent {
  @Input({ required: false }) backTitle: string = '';
  @Input({ required: false }) backImage: string = '';
  close: string = './assets/images/Frame 1321319546.svg';
}
