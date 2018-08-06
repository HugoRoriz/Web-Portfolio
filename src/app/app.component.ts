import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private translate: TranslateService) {

    const browserLang = translate.getBrowserLang();

    translate.addLangs(['English', 'Português']);
    translate.setDefaultLang('English');
    translate.use(browserLang.match(/English|Português/) ? browserLang : 'English');

  }
}
