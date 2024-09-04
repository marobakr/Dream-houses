import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../shared/button/button.component';
import { HeadrComponent } from '../../../../../shared/headr/headr.component';
import { TextEditorsComponent } from '../../../../../shared/text-editors/text-editors.component';

@Component({
  selector: 'app-description-house',
  standalone: true,
  imports: [HeadrComponent, TextEditorsComponent, ButtonComponent],
  templateUrl: './description-house.component.html',
  styleUrl: './description-house.component.scss',
})
export class DescriptionHouseComponent {}
