import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../data.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})

export class IntroComponent implements OnInit {

  inputValue: String;
  name: String;
  language: String;

  constructor(private translate: TranslateService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    $('#socialContainer').addClass('invisible');
    $('#headerPage').addClass('invisible');
    $('#footerPage').addClass('invisible');
  }

  nameSubmit() {
    event.preventDefault();

    this.inputValue = $('#inputName').val();

    if (this.inputValue === '') {
      $('#warning').addClass('display');
      return false;
    } else {
      $('#warning').removeClass('display');

      this.dataService.language = $('#langSelect option:selected').text();
      this.dataService.name = this.inputValue;

      if (this.dataService.language === 'en') {
        this.translate.use('en');
      } else {
        this.translate.use('pt');
      }
      this.router.navigate(['/about']);
    }
  }
}
