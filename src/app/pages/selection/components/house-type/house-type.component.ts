import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { HeadrComponent } from '../../../../shared/headr/headr.component';
import { TypeAndLocationHouseComponent } from '../../../../shared/type-and-location-house/type-and-location-house.component';

@Component({
  selector: 'app-house-type',
  standalone: true,
  imports: [
    ButtonComponent,
    HeadrComponent,
    TypeAndLocationHouseComponent,
    TranslateModule,
  ],
  templateUrl: './house-type.component.html',
  styleUrl: './house-type.component.scss',
})
export class HouseTypeComponent {
  cardImagePathOne: string = './assets/images/Group 1000017847.svg';
  cardImagePathTwo: string = './assets/images/building-wheat.svg';
  cardImagePathThere: string = './assets/images/building-wheat (1).svg';
}
