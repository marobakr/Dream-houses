import { Component } from '@angular/core';
import { StatusMessageComponent } from '../../../../shared/status-message/status-message.component';

@Component({
  selector: 'app-message-pendding',
  standalone: true,
  imports: [StatusMessageComponent],
  templateUrl: './message-pendding.component.html',
  styleUrl: './message-pendding.component.scss',
})
export class MessagePenddingComponent {
  messageHead = 'جاري إرسال رسالتك الأسكانية';
  messageTitle = 'الرجاء الأنتظار بعض الدقائق فقط';
  imageStatus: string = './assets/images/0c9abd2b33848aff4f0300d95ff98858.gif';
  successProcces: boolean = true;
}
