import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { HeadrComponent } from '../../../../shared/headr/headr.component';

@Component({
  selector: 'app-send-msg-house',
  standalone: true,
  imports: [HeadrComponent, ButtonComponent],
  templateUrl: './send-msg-house.component.html',
  styleUrl: './send-msg-house.component.scss',
})
export class SendMsgHouseComponent {}
