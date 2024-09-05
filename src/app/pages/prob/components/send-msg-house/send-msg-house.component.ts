import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { HeadrComponent } from '../../../../shared/headr/headr.component';

@Component({
  selector: 'app-send-msg-house',
  standalone: true,
  imports: [HeadrComponent, ButtonComponent, FormsModule, TranslateModule],
  templateUrl: './send-msg-house.component.html',
  styleUrl: './send-msg-house.component.scss',
})
export class SendMsgHouseComponent {
  constructor(private router: Router) {}
  IsCheckedOne: boolean = false;
  IsCheckedTwo: boolean = false;
  msg: string = '';

  onRadioChange(
    selectedOption: HTMLInputElement,
    property: 'IsCheckedOne' | 'IsCheckedTwo'
  ): void {
    this.IsCheckedOne = property === 'IsCheckedOne' && selectedOption.checked;

    this.IsCheckedTwo = property === 'IsCheckedTwo' && selectedOption.checked;
    console.log(this.IsCheckedOne || this.IsCheckedTwo);
  }

  nextStep(validMove: boolean): void {
    if (validMove) {
      this.router.navigate(['/submissions']);
    }
  }
}
