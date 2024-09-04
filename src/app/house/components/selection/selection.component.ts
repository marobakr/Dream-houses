import { Component } from '@angular/core';
import { HouseTypeComponent } from './components/house-type/house-type.component';
import { LocationComponent } from './components/location/location.component';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [LocationComponent, HouseTypeComponent],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.scss',
})
export class SelectionComponent {}
