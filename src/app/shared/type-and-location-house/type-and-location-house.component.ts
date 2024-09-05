import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { HeadrComponent } from '../headr/headr.component';

@Component({
  selector: 'app-type-and-location-house',
  standalone: true,
  imports: [HeadrComponent, ButtonComponent, CommonModule],
  templateUrl: './type-and-location-house.component.html',
  styleUrl: './type-and-location-house.component.scss',
})
export class TypeAndLocationHouseComponent {
  constructor(private router: Router) {}

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

  @Input({ required: true }) identifier: string = '';

  imagePath: string = './assets/images/circle-chevron-right.svg';
  IsCheckedOne: boolean = false;
  IsCheckedTwo: boolean = false;
  IsCheckedThere: boolean = false;

  onRadioChange(
    selectedOption: HTMLInputElement,
    property: 'IsCheckedOne' | 'IsCheckedTwo' | 'IsCheckedThere'
  ): void {
    this.IsCheckedOne = property === 'IsCheckedOne' && selectedOption.checked;

    this.IsCheckedTwo = property === 'IsCheckedTwo' && selectedOption.checked;

    this.IsCheckedTwo = property === 'IsCheckedThere' && selectedOption.checked;
  }

  nextStep(validMove: boolean): void {
    if (validMove) {
      if (this.identifier === 'location') {
        this.router.navigate(['send/description']);
      } else if (this.identifier === 'house') {
        this.router.navigate(['select/location']);
      }
    }
  }
}
