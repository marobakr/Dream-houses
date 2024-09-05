import { Component } from '@angular/core';
import { DescriptionHouseComponent } from './components/description-house/description-house.component';
import { SendMsgHouseComponent } from './components/send-msg-house/send-msg-house.component';

@Component({
  selector: 'app-prob',
  standalone: true,
  imports: [DescriptionHouseComponent, SendMsgHouseComponent],
  templateUrl: './prob.component.html',
  styleUrl: './prob.component.scss',
})
export class ProbComponent {}
