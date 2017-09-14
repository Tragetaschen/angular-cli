import {Component, ViewEncapsulation} from '@angular/core';
import {SERVICES} from './app.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [SERVICES]
})
export class AppComponent { }
