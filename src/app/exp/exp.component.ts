import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../data.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss']
})
export class ExpComponent implements OnInit {

  constructor(private translate: TranslateService, private dataService: DataService) { }

  ngOnInit() {
    $('#exp').addClass('isSelected');

    $(document).ready(function() {
      $(this).scrollTop(0);
    });

    $(window).on('scroll', function () {
      $('#expArrow').addClass('invisible');
    });
  }
}
