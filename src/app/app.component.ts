import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HouseComponent } from './pages/house/house.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HouseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dream-houses';
}
