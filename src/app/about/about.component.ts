import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../data.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  name: String;

  constructor(private translate: TranslateService, private dataService: DataService) { }

  ngOnInit() {
    this.name = this.dataService.name;

    $('#about').addClass('isSelected');

    $('#socialContainer').removeClass('invisible');
    $('#headerPage').removeClass('invisible');
    $('#footerPage').removeClass('invisible');

    $('#headerPage').addClass('animation_fadeIn');
    $('#footerPage').addClass('animation_fadeIn');

    $(document).ready(function() {
      $(this).scrollTop(0);
    });

    $(window).on('scroll', function () {
      $('#aboutArrow').addClass('invisible');
    });
  }
}
