import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../shared/button/button.component';
import { HeadrComponent } from '../../../../../shared/headr/headr.component';
import { TypeAndLocationHouseComponent } from '../components/type-and-location-house/type-and-location-house.component';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [ButtonComponent, HeadrComponent, TypeAndLocationHouseComponent],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
})
export class LocationComponent {
  location_title: string = 'أختر المكان المفضل لسكنك';
  location_heading: string =
    ' قم بأختيار مصدر شقك الأسكانية كل تستكمل باقي الخطوات';
  cardImagePathOne: string = './assets/images/house.svg';
  cardTextOne: string = 'القاهرة';
  cardImagePathTwo: string = './assets/images/truck-fast.svg';
  cardTextTwo: string = 'الساحل الشمالي"';
  cardImagePathThere: string = './assets/images/Group 1000017643.svg';
  cardTextThere: string = 'دهب';
  footerLabelOne: string = 'نحن هنا لمساعدتك في أختيار منزلك بسهولة وعناية';
  footerLabelTwo: string =
    'قم بالضغط على زر "بدء" للبدء في العملية، واتبع التوجيهات لإدخال معلومات الحملة';
}
