import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeadrComponent } from '../headr/headr.component';
type statusImage = 'success' | 'pendding';
@Component({
  selector: 'app-status-message',
  standalone: true,
  imports: [HeadrComponent, CommonModule],
  templateUrl: './status-message.component.html',
  styleUrl: './status-message.component.scss',
})
export class StatusMessageComponent {
  @Input({ required: true }) messageHead: string = '';
  @Input({ required: true }) messageTitle: string = '';
  @Input({ required: true }) imageFrame: statusImage = 'pendding';
  @Input({ required: true }) imageSatus: string = '';
  @Input({ required: true }) showProgress: boolean = true;
}
