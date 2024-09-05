import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StatusMessageComponent } from '../components/status-message/status-message.component';

@Component({
  selector: 'app-message-success',
  standalone: true,
  imports: [CommonModule, StatusMessageComponent],
  templateUrl: './message-success.component.html',
  styleUrl: './message-success.component.scss',
})
export class MessageSuccessComponent {
  messageHead = 'تم إرسال رسالتك بنجاح';
  messageTitle = 'الرجاء الأنتظار بعض الدقائق فقط';
  imageStatus: string = './assets/images/7ecf9be7ee0d214d8f7d24e4546e2f24.gif';
}
