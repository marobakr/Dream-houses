import { Component } from '@angular/core';
import { MessagePenddingComponent } from './components/message-pendding/message-pendding.component';
import { MessageSuccessComponent } from './components/message-success/message-success.component';

@Component({
  selector: 'app-submissionl',
  standalone: true,
  imports: [MessagePenddingComponent, MessageSuccessComponent],
  templateUrl: './submissionl.component.html',
  styleUrl: './submissionl.component.scss',
})
export class SubmissionlComponent {}
