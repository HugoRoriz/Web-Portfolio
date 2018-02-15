import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../data.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {

  constructor(private translate: TranslateService, private dataService: DataService) { }

  ngOnInit() {
    $('#blog').addClass('isSelected');

    $(document).ready(function() {
      $(this).scrollTop(0);
    });
  }
}
