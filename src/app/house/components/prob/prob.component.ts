import { Component } from '@angular/core';
import { DescriptionHouseComponent } from './components/description-house/description-house.component';

@Component({
  selector: 'app-prob',
  standalone: true,
  imports: [DescriptionHouseComponent],
  templateUrl: './prob.component.html',
  styleUrl: './prob.component.scss',
})
export class ProbComponent {}
