import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { HeadrComponent } from '../../../../shared/headr/headr.component';
import { TypeAndLocationHouseComponent } from '../../../../shared/type-and-location-house/type-and-location-house.component';

@Component({
  selector: 'app-house-type',
  standalone: true,
  imports: [ButtonComponent, HeadrComponent, TypeAndLocationHouseComponent],
  templateUrl: './house-type.component.html',
  styleUrl: './house-type.component.scss',
})
export class HouseTypeComponent {
  location_heading: string = 'أختر نوع المنزل';
  location_title: string =
    ' قم بأختيار مصدر شقك الأسكانية كل تستكمل باقي الخطوات';
  cardImagePathOne: string = './assets/images/Group 1000017847.svg';
  cardTextOne: string = 'فيلا';
  cardImagePathTwo: string = './assets/images/building-wheat.svg';
  cardTextTwo: string = 'شقة دوبليكس ';
  cardImagePathThere: string = './assets/images/building-wheat (1).svg';
  cardTextThere: string = 'شقة سكنية';
  footerLabelOne: string = 'نحن هنا لمساعدتك في أختيار منزلك بسهولة وعناية';
  footerLabelTwo: string =
    'قم بالضغط على زر "بدء" للبدء في العملية، واتبع التوجيهات لإدخال معلومات الحملة';
}
