import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { HeadrComponent } from '../headr/headr.component';

@Component({
  selector: 'app-type-and-location-house',
  standalone: true,
  imports: [HeadrComponent, ButtonComponent],
  templateUrl: './type-and-location-house.component.html',
  styleUrl: './type-and-location-house.component.scss',
})
export class TypeAndLocationHouseComponent {
  @Input({ required: true }) location_title: string = '';
  @Input({ required: true }) location_heading: string = '';

  @Input({ required: true }) cardImagePathOne: string = '';
  @Input({ required: true }) cardTextOne: string = '';

  @Input({ required: true }) cardImagePathTwo: string = '';
  @Input({ required: true }) cardTextTwo: string = '';

  @Input({ required: true }) cardImagePathThere: string = '';
  @Input({ required: true }) cardTextThere: string = '';

  @Input({ required: true }) footerLabelOne: string = '';
  @Input({ required: true }) footerLabelTwo: string = '';

  imagePath: string = './assets/images/circle-chevron-right.svg';
}
