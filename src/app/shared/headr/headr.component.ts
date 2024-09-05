import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-headr',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './headr.component.html',
  styleUrl: './headr.component.scss',
})
export class HeadrComponent {
  constructor(private location: Location) {}

  @Input({ required: false }) backTitle: string = '';
  @Input({ required: false }) backImage: string = '';
  close: string = './assets/images/Frame 1321319546.svg';

  goBack(): void {
    this.location.back();
  }
}
