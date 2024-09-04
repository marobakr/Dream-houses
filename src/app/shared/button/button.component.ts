import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({ required: false }) imagePath: string = '';
  @Input({ required: true }) label: string = '';
  @Input({ required: true }) disabled: boolean = false;
  @Input({ required: true }) haveImge: boolean = false;
  @Input({ required: true }) isMb_32: boolean = false;
}
