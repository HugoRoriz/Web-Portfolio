import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../data.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent implements OnInit {

  constructor(private translate: TranslateService, private dataService: DataService) { }

  ngOnInit() {
    $('#skills').addClass('isSelected');

    $(document).ready(function() {
      $(this).scrollTop(0);
    });

    $(window).on('scroll', function () {
      $('#skillsArrow').addClass('invisible');
    });
  }
}
