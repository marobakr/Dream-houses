import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { HeadrComponent } from '../../../../shared/headr/headr.component';
import { TypeAndLocationHouseComponent } from '../../../../shared/type-and-location-house/type-and-location-house.component';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [
    ButtonComponent,
    HeadrComponent,
    TypeAndLocationHouseComponent,
    TranslateModule,
  ],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
})
export class LocationComponent {
  cardImagePathOne: string = './assets/images/house.svg';
  cardImagePathTwo: string = './assets/images/truck-fast.svg';
  cardImagePathThere: string = './assets/images/Group 1000017643.svg';
}
