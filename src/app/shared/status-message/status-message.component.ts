import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeadrComponent } from '../headr/headr.component';
type statusImage = 'success' | 'pendding';
@Component({
  selector: 'app-status-message',
  standalone: true,
  imports: [HeadrComponent, CommonModule, TranslateModule],
  templateUrl: './status-message.component.html',
  styleUrl: './status-message.component.scss',
})
export class StatusMessageComponent implements AfterViewInit {
  @Input({ required: true }) messageHead: string = '';
  @Input({ required: true }) messageTitle: string = '';
  @Input({ required: true }) imageFrame: statusImage = 'pendding';
  @Input({ required: true }) imageSatus: string = '';
  @Input({ required: true }) showProgress: boolean = true;
  @Input({ required: false }) successProcces: boolean = false;
  @ViewChild('progressDiv') progressDiv!: ElementRef;
  constructor(protected _router: Router) {}

  ngAfterViewInit(): void {
    this.progressDiv.nativeElement.classList.remove('done-proccess');

    setTimeout(() => {
      this.progressDiv.nativeElement.classList.add('done-proccess');
    }, 5000);
    setTimeout(() => {
      this._router.navigate(['submissions/success']);
    }, 9000);
  }
}
